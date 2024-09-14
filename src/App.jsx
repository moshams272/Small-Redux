import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import store from "./store/store";
const routes = createBrowserRouter([{ path: "/", element: <Home /> }]);
function App() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"600px"}}>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
