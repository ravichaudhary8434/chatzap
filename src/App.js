import { useEffect } from "react";
import SideNavbar from "./components/SideNavbar";
import { AuthRouter, NonAuthRouter } from "./router";
import { ToastContainer } from "react-toastify";
import { compose } from "redux";
import { connect } from "react-redux";
import { checkIsUserLoggedIn } from "./actions/auth";

const App = ({ isLoggedIn, loader, checkLogin }) => {
  useEffect(() => {
    checkLogin();

    // eslint-disable-next-line
  }, []);

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
        {loader ? (
          <div>Loading...</div>
        ) : isLoggedIn ? (
          <AuthRouter />
        ) : (
          <NonAuthRouter />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  loader: state.auth.loader,
});

const mapDispatchToProps = (dispatch) => ({
  checkLogin: () => dispatch(checkIsUserLoggedIn()),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(App);
