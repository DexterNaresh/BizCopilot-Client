import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatMessage } from '../../models/ai-assistant.models';

@Component({
  selector: 'app-ai-chat-area',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-chat-area.component.html',
  styleUrls: ['./ai-chat-area.component.scss']
})
export class AiChatAreaComponent {
  @Input() messages: ChatMessage[] = [];
  @Input() showInitialState = true;
  @Input() suggestions: { icon: string; text: string; color: string }[] = [];
  @Output() suggestionClick = new EventEmitter<{ text: string }>();
  @Output() toggleHistory = new EventEmitter<void>();
  @Output() toggleContext = new EventEmitter<void>();

  composerText = '';

  onSuggestionClick(s: { text: string }) {
    this.suggestionClick.emit(s);
  }

  onSend() {
    if (!this.composerText.trim()) return;
    this.composerText = '';
  }
}
