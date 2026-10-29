# Answer spec

Three reply shapes: Covered, Not on the plan list, Question too vague.

Formulary table columns, in display order. These are the only names used in this spec:

    brand_name (or "(generic)" when null) → generic_name → drug_class → tier
    → prior_authorization → step_therapy → quantity_limit
    → step_therapy_prerequisite → quantity_limit_detail
    → source_page → formulary_effective_date

## Covered

The drug matches a row in the formulary table.

Fields the reply shows, in display order:

1. brand_name (or "(generic)" when null)
2. generic_name
3. drug_class
4. tier
5. prior_authorization
6. step_therapy
7. quantity_limit
8. step_therapy_prerequisite (only when step_therapy is true)
9. quantity_limit_detail (only when quantity_limit is true)
10. source_page
11. formulary_effective_date

Items 1 to 9 are the coverage text. source_page goes on its own line after the coverage text.

The page number comes from the retrieved row, never from the model.
The source page is shown on every covered reply, including when the drug has no limits.

When prior_authorization, step_therapy and quantity_limit are all false, show exactly this sentence in place of the three flags:

    This drug has no prior authorization, step therapy or quantity limit on your plan.

When quantity_limit is false, show exactly this sentence in place of the flag:

    This drug has no quantity limit on your plan.

When prior_authorization is false, show exactly this sentence in place of the flag:

    This drug does not require any prior authorization on your plan.

When step_therapy is false, show exactly this sentence in place of the flag:

    not required

### Sample reply

Question: "is trulicity covered"
Row: UHC-F25-0021

    Trulicity (dulaglutide) is on your plan.
    Class: Diabetes - GLP-1 Agonist
    Tier: 3
    Prior authorization: required
    Step therapy: not required
    Quantity limit: 4 pens (2 mL) per 28 days

    Source page: 22
    Formulary effective date: 2025-01-01

## Not on the plan list

No row in the formulary table matches the drug.

Say the drug was not found. Give no tier, status or limits. Show no table fields and no page.

### Sample reply

Question: "does my plan cover wegovy"
Row: none. No row in the table matches Wegovy.

    Wegovy was not found on your plan's drug list. Please contact Optum Rx member services.

## Question too vague

The question does not name a single drug.

Ask the member to name the drug. Never guess one. Show no table fields and no page.

### Sample reply

Question: "will my plan pay for my diabetes shot"
Rows: several match this class, including UHC-F25-0019 (Ozempic), UHC-F25-0021 (Trulicity) and UHC-F25-0022 (Mounjaro). None is picked.

    Which drug do you mean? Please tell me its name.

## Guard rule

If the search returns 0 rows, the reply gives no tier, no coverage status and no limits. It only says the drug was not found on the plan list. It then sends the member to Optum Rx member services.

Review IDs this rule would have blocked: PR-001, PR-006, PR-009, PR-013, PR-018, PR-023

    PR-001  Wegovy
    PR-006  Zepbound
    PR-009  Tirosint
    PR-013  Nurtec ODT
    PR-018  Qulipta
    PR-023  Vtama

In each, the drug is not on the 2025 drug list but the reply said it was covered.
