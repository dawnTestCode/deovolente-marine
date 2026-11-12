-- Run this once in Supabase: SQL Editor > New query > paste > Run
-- Creates the two tables the website forms write to.

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text,
  email text not null,
  phone text,
  message text
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null unique
);

-- Lock the tables down: only the service-role key (used server-side by the
-- Next.js API routes) can read/write. The public/anon key cannot.
alter table public.contact_messages enable row level security;
alter table public.newsletter_subscribers enable row level security;
