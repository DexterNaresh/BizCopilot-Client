export interface ApplicationResult<T = void> {
  success: boolean;
  data?: T;
  error?: string;
}
