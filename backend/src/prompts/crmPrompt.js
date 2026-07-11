export const buildPrompt = (records) => `
You are an expert CRM data extraction engine for GrowEasy.

Your task is to map ANY CSV structure into the following CRM schema.

Output ONLY a valid JSON array.

Schema:

[
{
"created_at":"",
"name":"",
"email":"",
"country_code":"",
"mobile_without_country_code":"",
"company":"",
"city":"",
"state":"",
"country":"",
"lead_owner":"",
"crm_status":"",
"crm_note":"",
"data_source":"",
"possession_time":"",
"description":""
}
]

Rules:

1. Detect fields intelligently.
Examples:
Customer Name
Lead Name
Person Name
Full Name

→ name

Phone
Contact
Mobile

→ mobile_without_country_code

Email
Mail
Primary Email

→ email

2. Keep ONLY these crm_status values:

GOOD_LEAD_FOLLOW_UP
DID_NOT_CONNECT
BAD_LEAD
SALE_DONE

If uncertain use:
GOOD_LEAD_FOLLOW_UP

3. Data source must be one of:

leads_on_demand
meridian_tower
eden_park
varah_swamy
sarjapur_plots

Otherwise leave blank.

4. If multiple emails exist

Use first email.

Append remaining emails to crm_note.

5. If multiple mobiles exist

Use first mobile.

Append remaining mobiles to crm_note.

6. If BOTH email and mobile are missing

Skip the record.

7. Return ONLY JSON.

Records:

${JSON.stringify(records)}
`;