// External Libraries
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import Modal from "react-modal"
import { ToastContainer } from "react-toastify"

// Internal Modules
import { store } from "./store"
import AppRouter from "./routes"
import reportWebVitals from "./reportWebVitals"

// Styles
import "./index.css"
import "react-toastify/dist/ReactToastify.css"

// Set App Element for Modals
Modal.setAppElement("#root")

// Create Root
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

// Render App
root.render(
  <Provider store={store}>
    <ToastContainer />
    <AppRouter />
  </Provider>
)

// Performance Measurement
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
