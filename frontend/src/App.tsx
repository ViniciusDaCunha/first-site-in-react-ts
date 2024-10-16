import "./App.css";
import Achievements from "./components/Achievements/Achievements";
import ClientsSection from "./components/ClientsSection/ClientsSection";
import CommunitySection from "./components/CommunitySection/CommunitySection";
import FooterUp from "./components/Footer/FooterUp";
import HeroSection from "./components/HeroSection/HeroSection";
import NavMenu from "./components/NavMenu/NavMenu";
import PixelFooter from "./components/PixelGrade/PixelFooter";
import PixelGrade from "./components/PixelGrade/PixelGrade";
import FooterDown from "./components/Footer/FooterDown";
import UpdateSection from "./components/UpdateSection/UpdateSection";

function App() {
  return (
    <>
      <NavMenu />
      <HeroSection />
      <ClientsSection />
      <CommunitySection />
      <PixelGrade />
      <Achievements />
      <PixelFooter />
      <UpdateSection />
      <FooterUp />
      <FooterDown />
    </>
  );
}

export default App;
