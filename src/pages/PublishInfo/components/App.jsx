
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import { PublishInfo } from "../PublishInfo.jsx"

function App() {
    return (
            <RouterProvider router={router}>
                {/* <Provider store={store}></Provider> */}
            </RouterProvider>
    );
}

export default App