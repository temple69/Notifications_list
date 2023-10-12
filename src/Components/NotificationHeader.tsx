import { notificationHeaderType } from "../Types/Types";
//Component
import useNotificationContext from "../hooks/useNotificationContext";
const NotificationHeader = ({ markAllAsRead }: notificationHeaderType) => {
  //using custom hook
  const notificationsContext = useNotificationContext();
  //Destructuring function from context
  const { unReadNotifications } = notificationsContext;
  return (
    <div className="flex justify-between  items-center">
      <article className="flex gap-2 font-extrabold items-center">
        <h2 className="text-[#1C202B] text-[1.25rem] md:text-[1.5rem]">
          Notifications
        </h2>
        <button className="bg-[#0A327B] rounded-md font-extrabold text-[0.8125rem] md:text-base">
          {" "}
          {unReadNotifications}
        </button>
      </article>
      <p
        className="text-[#0A327B] font-medium text-[0.8125rem] md:text-base cursor-pointer"
        onClick={markAllAsRead}
      >
        Mark all as read
      </p>
    </div>
  );
};
//Export
export default NotificationHeader;
