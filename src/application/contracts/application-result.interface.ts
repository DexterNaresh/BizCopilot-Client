export interface ApplicationError {
  code: string;
  message: string;
  field?: string;
}

export type ApplicationResult<T = void> = 
  | { success: true; data?: T }
  | { success: false; error: ApplicationError };
