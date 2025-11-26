import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router";
import  { APPLICATION_STORE }  from "../redux/redux";
 
  export function App() {
  return (
      <BrowserRouter>
        <Provider store={APPLICATION_STORE}>
          <Router />
        </Provider>
      </BrowserRouter>
  )
}
