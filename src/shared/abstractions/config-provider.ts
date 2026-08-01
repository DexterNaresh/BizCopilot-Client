/**
 * Generic Configuration Provider
 * See 01_Platform.md §14
 */
export abstract class IConfigProvider {
  abstract get<T>(key: string): T | null;
  abstract set<T>(key: string, value: T): void;
}
