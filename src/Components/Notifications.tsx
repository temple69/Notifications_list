import NotificationHeader from "./NotificationHeader"; //Component
import NotificationList from "./NotificationList"; //Component
import { useState } from "react";
import notificationsList from "../dataStore/store";
//Component
const Notifications = () => {
  const [notification, setNotification] = useState(notificationsList);
  const markAllAsRead = () => {
    const newNotification = notification.map((notification) => {
      return { ...notification, isRead: true, isOpened: true };
    });
    setNotification(newNotification);
  };
  return (
    <section className="mx-1 w-full md:mx-10 md:w-3/4  lg:w-2/4 custom_shadow px-4 py-6">
      <NotificationHeader markAllAsRead={markAllAsRead} />
      {notification.map((notification) => (
        <NotificationList
          key={notification.id}
          id={notification.id}
          name={notification.name}
          comment={notification.comment}
          time={notification.time}
          message={notification.message}
          isRead={notification.isRead}
          isOpened={notification.isOpened}
        />
      ))}
    </section>
  );
};
//Export
export default Notifications;
