import logo from "./logo.svg";
import "./App.css";
import Navbar from "./core/components/layouts/Navbar";
import Landing from "./core/components/layouts/Landing";
import Footer from "./core/components/layouts/Footer";
import RootRouter from "./route-routers/";

function App() {
  const appName = "Mindsprint";
  return (
    <>
      <Navbar appName="Mindsprint" />
      <RootRouter />

      <Footer />
    </>
  );
}

export default App;
