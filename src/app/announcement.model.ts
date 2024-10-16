// announcement.model.ts
export interface Announcement {
    likeCount: any;
    commentCount: any;
    id?: number; // Optional for new announcements
    name: string;
    title: string;
    attachment?: File; // Optional
    category: string;
    expiry: string;
    commentsDisabled: boolean;
    pinned: boolean;
    notifyAll: boolean;
    notifyOthers?: string; // Optional
    timestamp?: Date; // Optional for displaying the timestamp
    likes: number;
    comments: string[];// Optional for like counts
    date:Date;
    showCommentInput?: boolean;
    newComment?: string;
    message?: string;
    location?: string;
  }
  