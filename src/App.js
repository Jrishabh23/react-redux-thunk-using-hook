import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./component/store";
import Home from "./component";

function App() {
    return (
        <>
            <Provider store={store}>
                <Home />
            </Provider>
        </>
    );
}

export default App;
