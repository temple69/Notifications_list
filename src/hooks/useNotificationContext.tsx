import { NotificationsContext } from "../context/NotificationContext";
import { useContext } from "react";

const useNotificationContext = () => {
  const notificationsContext = useContext(NotificationsContext);
  return notificationsContext;
};

export default useNotificationContext;
