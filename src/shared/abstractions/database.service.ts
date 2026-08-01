export abstract class IDatabaseService {
  abstract initialize(): Promise<void>;
  abstract execute(sql: string, params?: any[]): void;
  abstract query<T = any>(sql: string, params?: any[]): T[];
  abstract queryOne<T = any>(sql: string, params?: any[]): T | null;
  abstract exportDatabase(): Uint8Array;
}
