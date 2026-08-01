import { Injectable } from '@angular/core';
import { ISequenceService, SequenceType } from '@shared/abstractions/sequence.service.interface';
import { DatabaseService } from '@platform/sqlite/database.service';

@Injectable({
  providedIn: 'root'
})
export class SqliteSequenceService implements ISequenceService {
  constructor(private db: DatabaseService) {}

  next(sequenceType: SequenceType): number {
    const sequenceName = sequenceType;
    
    // Participate in caller's transaction, no TransactionManager.execute here.
    const seqResult = this.db.queryOne<{ next_value: number }>(
      "SELECT next_value FROM sequences WHERE sequence_name = ?", [sequenceName]
    );
    if (!seqResult) {
      throw new Error(`${sequenceName} sequence not found`);
    }
    
    this.db.execute(
      "UPDATE sequences SET next_value = next_value + 1 WHERE sequence_name = ?", [sequenceName]
    );

    return seqResult.next_value;
  }
}
