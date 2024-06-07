import { motion } from "framer-motion";
import { DarkModeProps } from "../App";

export default function DarkMode({ darkMode, toggleSwitch }: DarkModeProps) {
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <div
      className="switch fixed top-4 left-4"
      data-darkMode={darkMode}
      onClick={toggleSwitch}
    >
      <motion.div className="handle" layout transition={spring} />
    </div>
  );
}
