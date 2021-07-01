import { Provider } from "react-redux";
import RouteFunction from "./EcommerceComp/RouteFunction";
import EcomStore from "./reduxEcart/EcomStore";

function App() {
  return (
    <div className="App">
      <Provider store={EcomStore}>
        <RouteFunction />
      </Provider>
    </div>
  );
}

export default App;
