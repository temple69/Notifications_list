import NotificationHeader from "./NotificationHeader"; //Component
import NotificationList from "./NotificationList"; //Component
//using custom hook
import useNotificationContext from "../hooks/useNotificationContext";

//Component
const Notifications = () => {
  const notificationsContext = useNotificationContext();
  const { notificationsData, markAllAsRead } = notificationsContext;

  return (
    <section className="mx-1 w-full md:mx-10 md:w-3/4  lg:w-2/4 custom_shadow px-4 py-6">
      <NotificationHeader markAllAsRead={markAllAsRead} />
      {notificationsData.map((notification) => (
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
