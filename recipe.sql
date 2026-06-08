create table recipes (
  id uuid primary key default uuid_generate_v4(),
  name text,
  ingredients jsonb,
  steps text[],
  budget text,
  tags text[],
  health_score jsonb,
  created_at timestamp default now()
);