export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR'
}

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  category: string;
  message: string;
  data?: any;
}

export abstract class ILogService {
  abstract debug(category: string, message: string, data?: any): void;
  abstract info(category: string, message: string, data?: any): void;
  abstract warn(category: string, message: string, data?: any): void;
  abstract error(category: string, message: string, data?: any): void;
  abstract getRecentLogs(): LogEntry[];
}
