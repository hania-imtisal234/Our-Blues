import "./App.css";
import AppProvider from "./context/AppProvider";
import AppRouter from "./routes/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="app">
      <AppProvider>
        <AppRouter />
        <ToastContainer position="top-center" />
      </AppProvider>
    </div>
  );
};

export default App;
