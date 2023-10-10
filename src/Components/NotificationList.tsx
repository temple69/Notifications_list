import { useState } from "react";
import Oval from "../assets/OvalMark.jpg";
import Unread from "./Icons/Unread";
import { NotificationListType } from "../Types/Types";
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
  //State which will be used to change the state of notification
  const [isUnRead, setisUnread] = useState(isRead);
  //State which manages the state of notification
  const [isOpen, setisOpened] = useState(isOpened);
  //Functiom which will be called when user clicks on notification
  const unReadHandler = () => {
    setisUnread(!isUnRead);
    setisOpened(true);
  };
  return (
    <div
      key={id}
      onClick={unReadHandler}
      className={`${
        !isOpen ? "rounded-lg bg-[#F7FAFD]" : "rounded-none bg-transparent"
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
            <strong className="text-[#1C202B]">{name}</strong> {comment}
            <span>{!isOpen ? <Unread /> : ""}</span>
          </p>
          <p className="text-[0.8125rem] md:text-base text-[#939CAD]">{time}</p>
        </article>
      </div>
      {isOpen ? (
        isUnRead ? (
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
