# Answer spec

Never: invent coverage · guess the drug · drop the page

## Case 1 - covered

Shows: brand_name (or "(generic)" when null) -> generic_name -> drug_class -> tier -> prior_authorization -> step_therapy -> quantity_limit -> step_therapy_prerequisite (only if set) -> quantity_limit_detail (only if quantity_limit is TRUE) -> source_page -> formulary_effective_date

if quantity_limit is FALSE
    Say: "No limits set"

Last line, `Source: {plan_name}, p.{source_page} (effective {formulary_effective_date})`

## Case 2 - not-found
## Guard rule - Review IDs: PR-001, PR-006, PR-009, PR-013, PR-018, PR-023
If search returns 0 rows:
    Show: No table columns
    Say: "Drug not found"

Send to Optum RX member services



## Case 3 - too-vague
Say: "Please be more specific with your request.
