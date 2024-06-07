import { useState } from "react";
import About from "./components/About";
import DarkMode from "./components/DarkMode";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import Projetos from "./components/Projetos";
export interface DarkModeProps {
  darkMode: boolean;
  toggleSwitch?: () => void;
}
export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const toggleSwitch = () => setDarkMode(!darkMode);
  return (
    <div className={`${darkMode ? "darkMode" : ""} bg-[var(--black)]`}>
      <ProgressBar />
      <DarkMode darkMode={darkMode} toggleSwitch={toggleSwitch} />
      <Header darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projetos darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
