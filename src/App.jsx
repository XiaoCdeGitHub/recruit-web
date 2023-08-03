import { useState } from 'react'
import './App.css'
import { Main } from './pages/Main/Main'
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        {/* <Provider store={store}></Provider> */}
      </RouterProvider>
    </Provider>
  );
}

export default App
