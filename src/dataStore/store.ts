import { NotificationType } from "../Types/Types";
const notificationsList: NotificationType[] = [
  {
    id: "1",
    name: "John doe",
    comment: "Commented on you post",
    time: "2m ago",
    message:
      "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    isRead: true,
    isOpened: false,
  },

  {
    id: "2",
    name: "Temple snowden",
    comment: "Liked your post",
    time: "1h ago",
    message: "Nice picture bro.",
    isRead: true,
    isOpened: false,
  },
  {
    id: "3",
    name: "Matthew brown",
    comment: "Reposted your post",
    time: "30m ago",
    message: "God when I go be like you",
    isRead: true,
    isOpened: false,
  },
  {
    id: "4",
    name: "Matthew doe",
    comment: "Commented on your picture",
    time: "1d ago",
    message: "Awwn cute couples",
    isRead: true,
    isOpened: true,
  },
  {
    id: "5",
    name: "Randy whiz",
    comment: "Shared your post",
    time: "6h ago",
    message: "You are doing well",
    isRead: true,
    isOpened: true,
  },
  {
    id: "6",
    name: "Bill Gates",
    comment: "Viwed your Profile",
    time: "1w ago",
    message:
      "Hello temple we have an open positon for you in our company would like to know more about your skillset and experience.",
    isRead: true,
    isOpened: true,
  },
];
export default notificationsList;
