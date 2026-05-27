-- Terry Tattoos — Supabase schema
-- Run this in Supabase SQL Editor when you're ready to go live.

create extension if not exists "uuid-ossp";

create table if not exists public.bookings (
  id            uuid primary key default uuid_generate_v4(),
  created_at    timestamptz not null default now(),
  starts_at     timestamptz not null,
  style         text not null,
  size          text not null,
  placement     text not null,
  description   text not null,
  name          text not null,
  email         text not null,
  phone         text not null,
  status        text not null default 'pending_deposit'
                  check (status in ('pending_deposit','confirmed','canceled','no_show','completed')),
  stripe_session_id text,
  notes         text
);

create index if not exists bookings_starts_at_idx on public.bookings (starts_at);
create index if not exists bookings_status_idx on public.bookings (status);

-- Row-Level Security: only the service role writes; nobody reads publicly.
alter table public.bookings enable row level security;

-- Optionally allow authenticated owner (terry) to read all rows.
-- Replace 'terry@terrytattoos.com' with the real owner email after creating an auth user.
-- create policy "owner can read bookings"
--   on public.bookings for select
--   using (auth.jwt() ->> 'email' = 'terry@terrytattoos.com');

create table if not exists public.contact_messages (
  id          uuid primary key default uuid_generate_v4(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  message     text not null,
  handled     boolean not null default false
);

alter table public.contact_messages enable row level security;
