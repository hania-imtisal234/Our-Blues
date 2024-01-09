import "./App.css";
import AppProvider from "./context/AppProvider";
import AppRouter from "./routes/AppRouter";
const App = () => {
  return (
    <div className="app">
      <AppProvider />
      <AppRouter />
      <AppProvider />
    </div>
  );
};

export default App;
