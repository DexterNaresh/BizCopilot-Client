# Local Authentication & User Switch Flow

This flowchart illustrates the G11 Local User Management rules, showing the offline-first fast login process.

```mermaid
flowchart TD
    Launch([App Launch]) --> CheckLocal[Check Local Settings / DB]
    
    CheckLocal --> HasSession{Is there an Active Session?}
    
    HasSession -- Yes --> ShowCurrent[Show Startup UI:\nCurrent User: Ravi]
    ShowCurrent --> Choice{Cashier Action}
    
    Choice -- Taps 'Continue Billing' --> BillScreen[Go Directly to Billing Screen]
    
    Choice -- Taps 'Switch User' --> UserList[Show Local User List\n(Owner, Cashier, Waiter)]
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
    Perm -- No --> Denied[Throw PERMISSION_DENIED Error]

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
