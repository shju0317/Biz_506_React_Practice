import BackImg from "./sky.jpg";
import "./App.css";
import BbsMain from "./main/BbsMain";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BbsNav from "./main/BbsNav";

function App() {
  const background = {
    backgroundImage: `url(${BackImg})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "100wh 50vh",
  };

  return (
    <div className="App">
      <header className="App-header" style={background}>
        <h3>React BBS 2020</h3>
        <p>React로 구현하는 BBS Project 🤩</p>
      </header>
      <Router>
        <BbsNav>
          <Route exact path="/" component={BbsMain} />
          <Route exact path="/admin" component={BbsMain} />
        </BbsNav>
      </Router>
      <BbsMain />
      <footer className="footer">
        <address>Copyright &copy; shju0317@naver.com</address>
      </footer>
    </div>
  );
}

export default App;
