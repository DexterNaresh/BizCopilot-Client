import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatHistoryGroup } from '../../models/ai-assistant.models';

@Component({
  selector: 'app-ai-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-history.component.html',
  styleUrls: ['./ai-history.component.scss']
})
export class AiHistoryComponent {
  @Input() historyGroups: ChatHistoryGroup[] = [];
  @Input() activeId = '';
  @Output() selectChat = new EventEmitter<string>();
  @Output() newChat = new EventEmitter<void>();

  onSelect(id: string) { this.selectChat.emit(id); }
  onNewChat() { this.newChat.emit(); }
}
