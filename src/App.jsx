import { RouterProvider } from "react-router-dom";
import "./App.scss";
import router from "./Routes/Router/Router";

function App() {
  
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
