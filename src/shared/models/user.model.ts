export enum UserRole { OWNER = 'OWNER', ADMIN = 'ADMIN', MANAGER = 'MANAGER', CASHIER = 'CASHIER', EMPLOYEE = 'EMPLOYEE' }
export interface User { id: string; name: string; role: UserRole; }
export interface Session { sessionId?: string; id?: string; userId?: string; expiresAt?: number; user?: any; startedAt?: any; }
