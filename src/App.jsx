import About from "./components/About";
import Ai_swiper from "./components/Ai_swiper";
import AiTools from "./components/AiTools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Works from "./components/Works";
import DesignSection from "./components/works/DesignSection";
import "../src/components/works/works.css";
import CodingSection from "./components/works/CodingSection";
import ProjectSection from "./components/works/ProjectSection";
function App() {
  return (
    <>
      {/* 상단 */}
      <Header />
      {/* 비주얼 */}
      <Hero />
      {/* 소개 */}
      <About />
      {/* 스킬 */}
      <Skills />
      {/* 작업 영역 */}
      <Works />
      {/* 디자인 작업 영역 */}
      <DesignSection />
      {/* 코딩 작업 영역 */}
      <CodingSection />
      {/* 협업 작업 영역 */}
      <ProjectSection />
      {/* Ai도구 활용 */}
      <AiTools />
      {/* swiper 적용 */}
      <Ai_swiper />
      {/* contact */}
      <Contact />
      {/* 하단 */}
      <Footer />
    </>
  );
}
export default App;
