import HeaderComponent from "./components/HeaderComponent";
import { AppProvider } from "./context/AppContext";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <>
      <AppProvider>
        <HeaderComponent />
        <AppLayout />
      </AppProvider>
    </>
  );
}

export default App;
