# System Architecture Blueprint

This diagram shows the rigid layer boundaries. The UI never talks to the database, and Business Modules never handle synchronization.

```mermaid
flowchart TD
    %% Layers
    subgraph UI
        D[Desktop Layout]
        T[Tablet Layout]
        M[Mobile Layout]
    end

    subgraph Application_Contract
        BC[Billing Contract]
        PC[Product Contract]
        OC[Offer Contract]
        RC[Report Contract]
    end

    subgraph Business_Engine
        Bill[Billing Service]
        Prod[Product Service]
        Cust[Customer Service]
        Off[Offer Service]
        Rep[Report Service]
    end

    subgraph Platform_Infrastructure
        Auth["Auth and Permissions"]
        Id["Identity and Sequence"]
        Run["Runtime Engine and Sync Queue"]
        Feat["Feature and License Manager"]
    end

    subgraph Persistence_Layer
        DB[(SQLite Local DB)]
    end
    
    subgraph Cloud_Layer
        SyncAPI[Spring Boot API]
        CloudDB[(PostgreSQL)]
        AI["AI Orchestrator / Gemini"]
    end

    %% Connections
    UI -- "Commands / Queries" --> Application_Contract
    Application_Contract -- "Validates Permissions" --> Auth
    Application_Contract -- "Invokes Business Logic" --> Business_Engine
    Business_Engine -- "Generates IDs / Validates features" --> Platform_Infrastructure
    Business_Engine -- "Reads / Writes" --> Persistence_Layer
    Auth -- "Validates PIN/Hash" --> Persistence_Layer
    
    Run -- "Async Background Sync" --> SyncAPI
    SyncAPI --> CloudDB
    SyncAPI --> AI
    
    %% Styling
    classDef ui fill:#4f46e5,stroke:#fff,color:#fff;
    classDef contract fill:#0891b2,stroke:#fff,color:#fff;
    classDef business fill:#059669,stroke:#fff,color:#fff;
    classDef platform fill:#d97706,stroke:#fff,color:#fff;
    classDef data fill:#374151,stroke:#fff,color:#fff;
    classDef cloud fill:#2563eb,stroke:#fff,color:#fff;
    
    class UI ui;
    class Application_Contract contract;
    class Business_Engine business;
    class Platform_Infrastructure platform;
    class Persistence_Layer data;
    class Cloud_Layer cloud;
```
