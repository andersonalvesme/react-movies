import Router from "./routes";
import {ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.min.css';

function App() {
    return (
        <>
            <ToastContainer/>
            <Router/>
        </>
    )
}

export default App;
