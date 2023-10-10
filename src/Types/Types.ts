// Type definitions for NotificationTypes
export type NotificationType = {
  id: string;
  name: string;
  comment: string;
  time: string;
  message: string;
  isRead: boolean;
  isOpened: boolean;
};
// Type definitions for NotificationListTypes
export type NotificationListType = NotificationType;
// Type definitions for NotificationHeaderTypes
export type notificationHeaderType = {
  markAllAsRead: () => void;
};
