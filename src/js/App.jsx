import NavBar from "./pages/NavBar";
import HeroPage from "./pages/Hero";
import AboutMe from "./pages/About";
import MyProjects from "./pages/Project_exp";
import BackToTop from "./components/ToTopButton";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
// import Loader from "./components/Spinner";

export const App = () => {
  return (
    <div>
      <NavBar />
      <HeroPage />
      <AboutMe />
      <MyProjects />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  );
};
