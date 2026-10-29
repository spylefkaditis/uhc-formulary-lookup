# Chat app sketch

Member asks about a drug. Assistant answers per [answer-spec.md](answer-spec.md): covered, not-found or too-vague.

## Screen

    ┌──────────────────────────────────────────┐
    │ Header                                   │
    ├──────────────────────────────────────────┤
    │ Thread (scrolls)                       ▒ │
    │                                        ▒ │
    │              {member message}  ▸       ▒ │
    │                                        ▒ │
    │ ◂ {coverage text}                        │
    │   {covered, not-found or too-vague}      │
    │                                          │
    │   {page citation}                        │
    │                                          │
    │              {member message}  ▸         │
    │                                          │
    │ ◂ {coverage text}                        │
    │                                          │
    ├──────────────────────────────────────────┤
    │ [ Text input                       ] [Send]
    └──────────────────────────────────────────┘

## Parts

    Header          fixed at top
    Thread          scrollable, member messages right, assistant left, newest at bottom
    Coverage text   the reply body for the case
    Page citation   separate line below the coverage text, not part of it
                    covered only; not-found and too-vague show none
    Text input      one line, Enter sends
    Send button     disabled while the input is empty or a reply is pending

## Flow

    1. Member sends text
    2. Find the drug name in the text
         none or ambiguous  → too-vague
    3. Query public.formulary_drugs on brand_name / generic_name (ilike)
         0 rows             → not-found
         1+ rows            → covered
    4. Render the reply for that case

Step 3 is the same query as `scripts/lookup.mts`.

## Open questions

- Who turns free text into a drug name: an LLM call, or keyword match?
- Multiple rows (e.g. two strengths): one card each, as the CLI does?
- Keep chat history, or one session only?
