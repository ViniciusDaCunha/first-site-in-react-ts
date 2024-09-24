import "./App.css";
import ClientsSection from "./components/ClientsSection/ClientsSection";
import HeroSection from "./components/HeroSection/HeroSection";
import NavMenu from "./components/NavMenu/NavMenu";

function App() {
  return (
    <>
      <NavMenu />
      <HeroSection />
      <ClientsSection />
    </>
  );
}

export default App;
