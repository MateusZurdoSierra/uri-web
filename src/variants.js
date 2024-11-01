export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const bounce = {
  hidden: { y: 0 },
  visible: {
    opacity: 1,
    y: [0, -10, 10, -5, 0],
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};
