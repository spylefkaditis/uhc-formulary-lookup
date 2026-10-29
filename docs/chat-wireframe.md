# Chat wireframe

Four parts, top to bottom: header, message thread, text input, send button beside the input.

```
┌────────────────────────────────────────────────────────┐
│ Formulary Assistant                                    │
│ Plan list: UnitedHealthcare Medicare Part D Sample     │
│ Formulary 2025                                         │
├────────────────────────────────────────────────────────┤
│                                                      ▲ │
│                       ┌──────────────────────────┐   █ │
│                       │ is trulicity covered     │   █ │
│                       └──────────────────────────┘   █ │
│                                                      █ │
│  ┌────────────────────────────────────────────┐      █ │
│  │ Trulicity (dulaglutide) is on your plan.   │      █ │
│  │ Class: Diabetes - GLP-1 Agonist            │      █ │
│  │ Tier: 3                                    │      █ │
│  │ Prior authorization: required              │      █ │
│  │ Step therapy: not required                 │      █ │
│  │ Quantity limit: 4 pens (2 mL) per 28 days  │      █ │
│  └────────────────────────────────────────────┘      █ │
│  ┌────────────────────────────────────────────┐      █ │
│  │ Source: page 22                            │      █ │
│  └────────────────────────────────────────────┘      ▼ │
├────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────┐ ┌─────────┐ │
│ │ Ask about a drug...                    │ │  Send   │ │
│ └────────────────────────────────────────┘ └─────────┘ │
└────────────────────────────────────────────────────────┘
```

## Parts

| Part | Position | Notes |
| --- | --- | --- |
| Header | Top, fixed | Names the assistant and the plan list |
| Message thread | Middle, scrolls | Member messages on the right, assistant replies on the left |
| Text input | Bottom left | One line |
| Send button | Bottom right, beside the input | |

## Covered reply

- **Coverage text box:** the fields from the Covered section of [answer-spec.md](answer-spec.md), in display order.
- **Source box:** separate, directly under the coverage text box and labelled `Source`. It holds only the page number, taken from the retrieved row.
