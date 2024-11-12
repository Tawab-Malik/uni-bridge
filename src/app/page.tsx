// import FeaturesSection from "./components/Features";
import AimSection from "./components/Aims";
import Header from "./components/Header";
import Herosection from "./components/Herosecton";
import MissionSection from "./components/Mission";
import Objectives from "./components/Objectives";
import VisionSection from "./components/Vision";
import "./globals.css";
export default function Home() {
  return (
    <>
      <Header/>
      <Herosection/>
      {/* <FeaturesSection/> */}
      <VisionSection/>
      <AimSection/>
      <MissionSection/>
      <Objectives/>
    </>
  );
}
