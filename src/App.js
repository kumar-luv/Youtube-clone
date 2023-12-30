import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/appStore";
import { RouterProvider } from "react-router-dom";
import { appRouter } from ".";

function App() {

  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
