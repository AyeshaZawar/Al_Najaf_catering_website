# Install & Deploy

1. Install dependencies (root project):

```bash
npm install
```

2. Add environment variables on Vercel (Project Settings → Environment Variables):

- `VITE_SUPABASE_URL` = from Supabase project API → URL
- `VITE_SUPABASE_ANON_KEY` = from Supabase project API → anon key

3. Local .env (for development): create a `.env` file in the project root with:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJI...
```

4. Deploy to Vercel: connect your GitHub repo and deploy. Make sure environment variables are set in the Vercel project.

5. Admin user: create an admin user in Supabase Auth dashboard (Users → Invite / Add row) and note the email/password.
