import { motion, useScroll, useTransform } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["var(--dark-grey)", "var(--lime)"]
  );

  return (
    <motion.div
      className="progress-bar fixed top-0 left-0 right-0 h-2 z-50"
      style={{ scaleX: scrollYProgress, background: backgroundColor }}
    />
  );
}
