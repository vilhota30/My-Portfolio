import NavBar from "./pages/NavBar";
import HeroPage from "./pages/Hero";
import AboutMe from "./pages/About";
import MyProjects from "./pages/Project_exp";

export const App = () => {
  return (
    <div>
      <NavBar />
      <HeroPage />
      <AboutMe />
      <MyProjects />
    </div>
  );
};
