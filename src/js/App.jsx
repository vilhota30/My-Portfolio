import NavBar from "./pages/NavBar";
import HeroPage from "./pages/Hero";
import AboutMe from "./pages/About";
import MyProjects from "./pages/Project_exp";
import BackToTop from "./components/ToTopButton";
import Contact from "./pages/Contact";
import MySkills from "./pages/Skills";
import Footer from "./pages/Footer";
import EducationSertificate from "./pages/Education_certific";
// import Loader from "./components/Spinner";

export const App = () => {
  return (
    <div>
      <NavBar />
      <HeroPage />
      <AboutMe />
      <MyProjects />
      <Contact />
      <MySkills />
      <EducationSertificate />
      <BackToTop />
      <Footer />
    </div>
  );
};
