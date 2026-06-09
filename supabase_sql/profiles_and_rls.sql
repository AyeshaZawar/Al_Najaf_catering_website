-- Profiles table linked to auth.users
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  email text,
  role text not null default 'admin',
  created_at timestamptz not null default now()
);

-- Ensure index on role
create index if not exists profiles_role_idx on public.profiles(role);

-- Enable Row Level Security on profiles
alter table public.profiles enable row level security;

-- Policy: allow users to insert their own profile (when signing up)
create policy if not exists "profiles_insert_own" on public.profiles
  for insert using (auth.role() = 'authenticated') with check (auth.uid() = id);

-- Policy: allow users to select/update their own profile
create policy if not exists "profiles_manage_own" on public.profiles
  for select using (auth.uid() = id);

create policy if not exists "profiles_update_own" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- Allow admins (role = 'admin' in profiles) to select all profiles
create policy if not exists "profiles_select_admins" on public.profiles
  for select using (exists (
    select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'
  ));

-- CONTACT SUBMISSIONS table policies
alter table public.contact_submissions enable row level security;

-- Allow anyone (anon) to insert contact submissions
create policy if not exists "contact_insert_public" on public.contact_submissions
  for insert using (true);

-- Allow admins to select and delete submissions
create policy if not exists "contact_manage_admins" on public.contact_submissions
  for select using (exists (
    select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'
  ));

create policy if not exists "contact_delete_admins" on public.contact_submissions
  for delete using (exists (
    select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'
  ));

-- Prevent non-admins from selecting/deleting
