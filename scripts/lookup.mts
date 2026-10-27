import { createClient } from "@supabase/supabase-js";

const query = process.argv.slice(2).join(" ").trim();
if (!query) {
  console.error('Usage: npm run lookup -- <brand or generic name>\n  e.g. npm run lookup -- ozempic');
  process.exit(1);
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!url || !key) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(url, key);

// Quote the pattern so commas/parens in input can't break the PostgREST or() filter.
const pattern = `"%${query.replace(/[\\"]/g, "\\$&")}%"`;

const { data, error } = await supabase
  .from("formulary_drugs")
  .select("*")
  .or(`brand_name.ilike.${pattern},generic_name.ilike.${pattern}`)
  .order("generic_name")
  .order("brand_name")
  .order("drug_id");

if (error) {
  console.error(`Query failed: ${error.message}`);
  process.exit(1);
}
if (!data || data.length === 0) {
  console.log(`No drugs found matching "${query}".`);
  process.exit(0);
}

const yn = (v: boolean) => (v ? "Yes" : "No");

console.log(`${data.length} result${data.length === 1 ? "" : "s"} for "${query}"\n`);
for (const d of data) {
  console.log(`${d.brand_name ?? "(generic)"} — ${d.generic_name}  [${d.drug_id}]`);
  console.log(`  Class:    ${d.drug_class}`);
  console.log(`  Form:     ${d.dosage_form}, ${d.strength}`);
  console.log(`  Tier:     ${d.tier}`);
  console.log(
    `  PA: ${yn(d.prior_authorization)}   Step therapy: ${yn(d.step_therapy)}   Qty limit: ${yn(d.quantity_limit)}`,
  );
  if (d.step_therapy_prerequisite) console.log(`  Step req: ${d.step_therapy_prerequisite}`);
  if (d.quantity_limit_detail) console.log(`  Qty:      ${d.quantity_limit_detail}`);
  console.log(`  Source:   ${d.plan_name}, p.${d.source_page ?? "?"} (effective ${d.formulary_effective_date})\n`);
}
