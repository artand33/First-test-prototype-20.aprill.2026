export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};
export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};
export const cardHover = {
  whileHover: { y: -4, scale: 1.01 },
  transition: { duration: 0.3, ease: "easeOut" },
};
