import { Injectable } from '@angular/core';
import { ILogService, LogEntry, LogLevel } from '@shared/abstractions/log.service';

@Injectable()
export class LogService implements ILogService {
  private readonly logs: LogEntry[] = [];
  private readonly MAX_LOGS = 500;

  debug(category: string, message: string, data?: any): void {
    this.log(LogLevel.DEBUG, category, message, data);
  }

  info(category: string, message: string, data?: any): void {
    this.log(LogLevel.INFO, category, message, data);
  }

  warn(category: string, message: string, data?: any): void {
    this.log(LogLevel.WARN, category, message, data);
  }

  error(category: string, message: string, data?: any): void {
    this.log(LogLevel.ERROR, category, message, data);
  }

  getRecentLogs(): LogEntry[] {
    return [...this.logs];
  }

  private log(level: LogLevel, category: string, message: string, data?: any): void {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      category,
      message,
      data
    };

    this.logs.push(entry);
    if (this.logs.length > this.MAX_LOGS) {
      this.logs.shift();
    }

    if (level === LogLevel.ERROR) {
      console.error(`[${entry.category}] ${entry.message}`, data || '');
    } else {
      console.log(`[${entry.level}][${entry.category}] ${entry.message}`);
    }
  }
}
