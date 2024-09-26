import "./App.css";
import ClientsSection from "./components/ClientsSection/ClientsSection";
import CommunitySection from "./components/CommunitySection/CommunitySection";
import HeroSection from "./components/HeroSection/HeroSection";
import NavMenu from "./components/NavMenu/NavMenu";

function App() {
  return (
    <>
      <NavMenu />
      <HeroSection />
      <ClientsSection />
      <CommunitySection />
    </>
  );
}

export default App;
