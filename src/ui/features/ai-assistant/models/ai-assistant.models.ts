export interface AiMetrics {
  totalSales: number;
  totalBills: number;
  avgBill: number;
  totalDiscount: number;
}

export interface AiAttentionItem {
  icon: string;
  label: string;
  sublabel: string;
  color: string;
  route: string;
}

export interface AiQuickLink {
  icon: string;
  label: string;
  route: string;
  color: string;
}

export interface ChatHistoryItem {
  id: string;
  title: string;
  time: string;
  icon: string;
}

export interface ChatHistoryGroup {
  label: string;
  items: ChatHistoryItem[];
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  text: string;
  time: string;
  metrics?: { label: string; value: string; trend: string; trendDir: 'up' | 'down'; icon: string; iconBg: string; iconColor: string }[];
  reasons?: { icon: string; iconBg: string; iconColor: string; title: string; detail: string }[];
  actions?: { num: number; text: string }[];
  evidence?: string[];
  followUps?: { label: string; icon: string; color: string }[];
}
