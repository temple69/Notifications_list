import Notifications from "./Components/Notifications"; //Component
import { NotificationContextProvider } from "./context/NotificationContext"; //Context
function App() {
  return (
    <main className="bg-[#F7FAFD] flex justify-center items-center min-w-fit  h-fit lg:h-[100vh]">
      <NotificationContextProvider>
        <Notifications />
      </NotificationContextProvider>
    </main>
  );
}

export default App;
