import SideNavbar from "./components/SideNavbar";
import Router from "./router";

const App = () => {
  return (
    <div className="App">
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
