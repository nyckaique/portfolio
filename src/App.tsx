import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import Projetos from "./components/Projetos";

export default function App() {
  return (
    <div className="bg-[var(--black)]">
      <ProgressBar />
      <Header />
      <About />
      <Projetos />
      <Footer />
    </div>
  );
}
