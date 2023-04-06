import { useState } from "react";
import SideNavbar from "./components/SideNavbar";
import { AuthRouter, NonAuthRouter } from "./router";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        {isLoggedIn ? <AuthRouter /> : <NonAuthRouter />}
      </div>
    </div>
  );
};

export default App;
