-- SQL to create contact_submissions table
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Index for faster ordering by created_at
create index if not exists contact_submissions_created_at_idx on public.contact_submissions(created_at desc);
