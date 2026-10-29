# Answer spec

Never: invent coverage · guess the drug · drop the page

## Case 1 - covered

Shows: brand_name (or "(generic)" when null) -> generic_name -> drug_class -> tier -> prior_authorization -> step_therapy -> quantity_limit -> step_therapy_prerequisite (only if set) -> quantity_limit_detail (only if quantity_limit is TRUE) -> source_page -> formulary_effective_date

if prior_authorization is FALSE
Say: "No prior authorization is required for this drug under this plan."
if step_therapy is FALSE
Say: "No therapy is required for this drug under this plan."
if quantity_limit is FALSE
Say: "No quantity limit is set for this drug under this plan."

Last line, `Source: {plan_name}, p.{source_page} (effective {formulary_effective_date})`

## Case 2 - not-found

## Guard rule - Review IDs: PR-001, PR-006, PR-009, PR-013, PR-018, PR-023

Shows: Drug not found, then the Optum Rx member services referral
Do not show brand_name (or "(generic)" when null) -> generic_name -> drug_class -> tier -> prior_authorization -> step_therapy -> quantity_limit -> step_therapy_prerequisite (only if set) -> quantity_limit_detail (only if quantity_limit is TRUE) -> source_page -> formulary_effective_date

Blocks PR-001: The reply said Wegovy is covered by the plan as a Tier 3. The guard returns only Drug not found and the Optum Rx member services referral.
Blocks PR-006: The reply said Zepbound is covered by the plan. The guard returns only Drug not found and the Optum Rx member services referral.
Blocks PR-009: the reply said Tirosint covered at Tier 2. The guard returns only Drug not found and the Optum Rx member services referral.
Blocks PR-013: the reply said Nurtec ODT is covered. The guard returns only Drug not found and the Optum Rx member services referral.
Blocks PR-018: the reply said Qulipta is covered at Tier 3. The guard returns only Drug not found and the Optum Rx member services referral.
Blocks PR-023: the reply said Vtama cream is covered at Tier 4. The guard returns only Drug not found and the Optum Rx member services referral.

## Case 3 - too-vague

Say: "Please be more specific with your request.
