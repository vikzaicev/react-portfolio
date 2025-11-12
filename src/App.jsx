import About from "./components/About/About";
import Client from "./components/Client/Client";
import GetIn from "./components/GetIn/GetIn";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Servises from "./components/Servises/Servises";
import { Skills } from "./components/Skilss/Skilss";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Servises />
      <Portfolio />
      <GetIn />
      <Client />
    </>
  );
}

export default App;
