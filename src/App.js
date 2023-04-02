import SideNavbar from "./components/SideNavbar";
import Router from "./router";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ToastContainer />
      <div className="App__sidebar">
        <SideNavbar />
      </div>
      <div className="App__container">
        <Router />
      </div>
    </div>
  );
};

export default App;
