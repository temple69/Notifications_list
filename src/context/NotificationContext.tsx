import { createContext, useState } from "react"; //React
import notificationsList from "../dataStore/store"; //Data
import { NotificationContextType } from "../Types/Types"; //Types
import { NotificationType } from "../Types/Types"; //Types
//Create a context
export const NotificationsContext = createContext({
  notificationsData: [] as NotificationType[],
  markAllAsRead: () => {},
  unReadHandler: (id: string) => {},
  unReadNotifications: 0,
});
//Create a context provider
export const NotificationContextProvider = ({
  children,
}: NotificationContextType) => {
  //State to store the data and track the changes
  const [notificationsData, setNotificationsData] =
    useState<NotificationType[]>(notificationsList);
  //Function to mark all notifications as read
  const markAllAsRead = () => {
    const newNotification = notificationsData.map((notification) => {
      return { ...notification, isRead: true, isOpened: true };
    });
    setNotificationsData(newNotification);
  };
  //Function to track the unread notifications
  const trackUnReadNotification = (): number => {
    const unReadNotifications = notificationsData.filter(
      (notification) => notification.isOpened === false
    ).length;
    return unReadNotifications;
  };
  //Function to mark a notification as read
  const unReadHandler = (id: string) => {
    const newNotification = notificationsData.map((notification) => {
      const { isRead } = notification;
      if (notification.id === id) {
        return { ...notification, isRead: !isRead, isOpened: true };
      } else {
        return notification;
      }
    });
    setNotificationsData(newNotification);
    trackUnReadNotification();
  };

  return (
    <NotificationsContext.Provider
      value={{
        notificationsData,
        markAllAsRead,
        unReadHandler,
        unReadNotifications: trackUnReadNotification(),
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
