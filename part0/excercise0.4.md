```mermaid
    sequenceDiagram
        participant Browser
        participant Server
        Browser->>Server: POST "https://studies.cs.helsinki.fi/exampleapp/new_note"
        Note right of Browser: The browser sends the note to the server.
```