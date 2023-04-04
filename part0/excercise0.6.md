```mermaid
sequenceDiagram
    participant Browser
    participant Server
    note right of Browser: Browser-side JSON array is updated and the page is also updated with the Javascript event handler
    Browser ->> Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    note right of Server: The Server-side JSON array is updated with the data
    Server -->> Browser: "Note Created" Message
```