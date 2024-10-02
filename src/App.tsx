import "./App.css";
import ClientsSection from "./components/ClientsSection/ClientsSection";
import CommunitySection from "./components/CommunitySection/CommunitySection";
import HeroSection from "./components/HeroSection/HeroSection";
import NavMenu from "./components/NavMenu/NavMenu";
import PixelFooter from "./components/PixelGrade/PixelFooter";
import PixelGrade from "./components/PixelGrade/PixelGrade";

function App() {
  return (
    <>
      <NavMenu />
      <HeroSection />
      <ClientsSection />
      <CommunitySection />
      <PixelGrade />
      <PixelFooter />
    </>
  );
}

export default App;
