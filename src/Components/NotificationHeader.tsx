import { notificationHeaderType } from "../Types/Types";
const NotificationHeader = ({ markAllAsRead }: notificationHeaderType) => {
  return (
    <div className="flex justify-between  items-center">
      <article className="flex gap-2 font-extrabold items-center">
        <h2 className="text-[#1C202B] text-[1.25rem] md:text-[1.5rem]">
          Notifications
        </h2>
        <button className="bg-[#0A327B] rounded-md font-extrabold text-[0.8125rem] md:text-base">
          {" "}
          3
        </button>
      </article>
      <p
        className="text-[#5E6778] font-medium text-[0.8125rem] md:text-base"
        onClick={markAllAsRead}
      >
        Mark all as read
      </p>
    </div>
  );
};

export default NotificationHeader;
