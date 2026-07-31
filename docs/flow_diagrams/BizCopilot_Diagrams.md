# BizCopilot V1 Diagrams

The following diagrams visually represent the finalized BizCopilot V1 architecture, billing pipeline, and local user experience.

## 1. System Architecture Blueprint

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

## 2. Core Sales & Offer Flow (The "Fast Billing" Pipeline)

This flowchart illustrates the core billing pipeline, including the G10 Offer Resolution rules that prioritize speed.

```mermaid
flowchart TD
    Start([Start New Bill]) --> AddProduct[Scan / Search Product]
    AddProduct --> CheckAvail{Is Product Available?}
    CheckAvail -- No --> Error[Show Error]
    CheckAvail -- Yes --> BuildCart["Add to Cart and Calculate Base Line Totals"]
    
    BuildCart --> CheckOffers[Fetch Active Offers]
    
    CheckOffers --> CatCheck{Same Category Offers Only?}
    
    CatCheck -- Yes Rule 1 --> AutoApply[System Auto-Applies Highest Customer Benefit]
    AutoApply --> CalcTax["Calculate Tax and Grand Total"]
    
    CatCheck -- No Rule 2 --> Deferred[Defer Application]
    Deferred --> CalcTax
    
    CalcTax --> TapPay[Cashier Taps Pay]
    
    TapPay --> HasMulti{Were Offers Deferred?}
    HasMulti -- Yes --> Popup["Show Applicable Offers Bottom Sheet"]
    Popup --> ApplySel[Operator Selects Offers]
    ApplySel --> Recalc[Recalculate Grand Total]
    Recalc --> PayMethod[Select Payment Method]
    
    HasMulti -- No --> PayMethod
    
    PayMethod --> GenID["Platform Generates BillId UUID and BillNumber"]
    GenID --> Save[Save Completed Bill to SQLite]
    Save --> Queue[Queue Event for Async Sync]
    Queue --> Print["Print Receipt / Success UI"]
    Print --> Finish([Ready for Next Bill])

    %% Styling
    classDef action fill:#0f172a,stroke:#3b82f6,color:#fff,stroke-width:2px;
    classDef decision fill:#3b82f6,stroke:#fff,color:#fff;
    classDef system fill:#059669,stroke:#fff,color:#fff;
    classDef ui fill:#8b5cf6,stroke:#fff,color:#fff;
    
    class Start,Finish action;
    class CheckAvail,CatCheck,HasMulti decision;
    class AutoApply,CalcTax,GenID,Save,Queue system;
    class Popup,ApplySel ui;
```

## 3. Local Authentication & User Switch Flow

This flowchart illustrates the G11 Local User Management rules, showing the offline-first fast login process.

```mermaid
flowchart TD
    Launch([App Launch]) --> CheckLocal["Check Local Settings / DB"]
    
    CheckLocal --> HasSession{Is there an Active Session?}
    
    HasSession -- Yes --> ShowCurrent["Show Startup UI: Current User Ravi"]
    ShowCurrent --> Choice{Cashier Action}
    
    Choice -- Taps Continue Billing --> BillScreen[Go Directly to Billing Screen]
    
    Choice -- Taps Switch User --> UserList["Show Local User List: Owner, Cashier, Waiter"]
    HasSession -- No --> UserList
    
    UserList --> SelectUser[Select User]
    SelectUser --> PIN[Enter 4-Digit or 6-Digit PIN]
    
    PIN --> Hash[Local Platform Hashes PIN]
    Hash --> Validate{Matches Local SQLite?}
    
    Validate -- No --> Fail[Show Error]
    Validate -- Yes --> SetSession[Set New Active Session]
    SetSession --> BillScreen
    
    BillScreen --> DoAction[Perform Action]
    DoAction --> Contract[Application Contract]
    Contract --> Perm{Has Permission?}
    
    Perm -- Yes --> Exec[Execute Business Logic]
    Perm -- No --> Denied[Throw PERMISSION DENIED Error]

    %% Styling
    classDef start fill:#0f172a,stroke:#3b82f6,color:#fff,stroke-width:2px;
    classDef decision fill:#3b82f6,stroke:#fff,color:#fff;
    classDef system fill:#059669,stroke:#fff,color:#fff;
    classDef user fill:#6366f1,stroke:#fff,color:#fff;
    
    class Launch start;
    class HasSession,Choice,Validate,Perm decision;
    class CheckLocal,Hash,SetSession,Contract,Exec,Denied system;
    class ShowCurrent,UserList,SelectUser,PIN,BillScreen,DoAction user;
```
