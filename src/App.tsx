import Header from './components/header/header'
import RouterSwitch from './components/routing/routerswitch'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import MobileNavBar from './components/navbar/mobilenavbar'

function App() {
  return (
    <Router>
      <div className="font-sans">
        <MobileNavBar />
        <Header />
        <RouterSwitch />
      </div>
    </Router>
  );
}

export default App;
