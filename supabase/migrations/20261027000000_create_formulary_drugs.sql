create table public.formulary_drugs (
  drug_id text primary key,
  brand_name text,
  generic_name text not null,
  drug_class text not null,
  dosage_form text not null,
  strength text not null,
  tier smallint not null check (tier between 1 and 5),
  prior_authorization boolean not null default false,
  step_therapy boolean not null default false,
  step_therapy_prerequisite text,
  quantity_limit boolean not null default false,
  quantity_limit_detail text,
  source_page integer,
  plan_name text not null,
  formulary_effective_date date not null,
  created_at timestamptz not null default now()
);

create index formulary_drugs_generic_name_idx on public.formulary_drugs (generic_name);
create index formulary_drugs_brand_name_idx on public.formulary_drugs (brand_name);
create index formulary_drugs_drug_class_idx on public.formulary_drugs (drug_class);
create index formulary_drugs_tier_idx on public.formulary_drugs (tier);

alter table public.formulary_drugs enable row level security;

create policy "Formulary is readable by everyone"
  on public.formulary_drugs for select
  to anon, authenticated
  using (true);
