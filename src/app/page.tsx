// import FeaturesSection from "./components/Features";
import AimSection from "./components/Aims";
import Header from "./components/Header";
import Herosection from "./components/Herosecton";
import MissionSection from "./components/Mission";
import VisionSection from "./components/Vision";

export default function Home() {
  return (
    <>
      <Header/>
      <Herosection/>
      {/* <FeaturesSection/> */}
      <VisionSection/>
      <AimSection/>
      <MissionSection/>
    </>
  );
}
