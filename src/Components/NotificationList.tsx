import Oval from "../assets/OvalMark.jpg"; //Image
import Unread from "./Icons/Unread"; //Icon
import { NotificationListType } from "../Types/Types"; //Types
import { useContext } from "react"; //React
import { NotificationsContext } from "../context/NotificationContext"; //Context
//Component
const NotificationList = ({
  id,
  name,
  comment,
  time,
  message,
  isRead,
  isOpened,
}: NotificationListType) => {
  //Context call
  const notificationsContext = useContext(NotificationsContext);
  //Destructuring function from context
  const { unReadHandler } = notificationsContext;
  return (
    <div
      key={id}
      onClick={() => unReadHandler(id)}
      className={`${
        !isOpened ? "rounded-lg bg-[#F7FAFD]" : "rounded-none bg-transparent"
      } px-4 py-3 my-3 cursor-pointer`}
    >
      <div className="flex gap-4 items-center">
        <img
          src={Oval}
          alt="oval"
          className="w-[2.8125rem] h-[2.8125rem] md:w-[2.4375rem] md:h-[2.4375rem]"
        />
        <article>
          <p className="text-[#5E6778] text-[0.875rem] md:text-base  font-medium">
            <strong className="text-[#1C202B] font-extrabold">{name}</strong>{" "}
            {comment}
            <span>{!isOpened ? <Unread /> : ""}</span>
          </p>
          <p className="text-[0.8125rem] md:text-base text-[#939CAD]">{time}</p>
        </article>
      </div>
      {isOpened ? (
        isRead ? (
          ""
        ) : (
          <article className="rounded-[0.3125rem] bg-white md:bg-[#E5EFFA] border border-[#DDE7EE] ml-[7vw] md:ml-[6vw] lg:ml-[4vw] h-fit px-4  py-4 mt-4">
            <p className="text-[#5E6778] font-medium text-[0.875rem] md:text-base">
              {message}
            </p>
          </article>
        )
      ) : (
        ""
      )}
    </div>
  );
};
//Export
export default NotificationList;
