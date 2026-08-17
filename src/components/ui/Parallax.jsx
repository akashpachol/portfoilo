"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

/**
 * Reusable Parallax Component
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Elements to apply parallax effect to
 * @param {number} [props.speed=0.2] - Speed factor multiplier (-1 to 1)
 * @param {'vertical'|'horizontal'|'scale'|'rotate'|'opacity'} [props.direction='vertical'] - Type of motion
 * @param {number[]} [props.offset] - Custom start/end transform values e.g. [-100, 100]
 * @param {Object} [props.springConfig] - Custom spring physics config
 * @param {string} [props.className=''] - Class names
 * @param {Object} [props.style] - Additional style object
 * @param {string} [props.as='div'] - Element type
 */
export default function Parallax({
  children,
  speed = 0.2,
  direction = "vertical",
  offset,
  springConfig = { damping: 20, stiffness: 100, mass: 0.1 },
  className = "",
  style = {},
  as = "div",
}) {
  const targetRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Track target element relative to viewport
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Calculate parallax target range based on direction and speed
  let defaultOutput;
  switch (direction) {
    case "horizontal":
      defaultOutput = [-80 * speed, 80 * speed];
      break;
    case "scale":
      defaultOutput = [0.92, 1.08];
      break;
    case "rotate":
      defaultOutput = [-12 * speed, 12 * speed];
      break;
    case "opacity":
      defaultOutput = [0.4, 1];
      break;
    case "vertical":
    default:
      defaultOutput = [-100 * speed, 100 * speed];
      break;
  }

  const outputRange = offset || defaultOutput;
  const rawTransform = useTransform(scrollYProgress, [0, 1], outputRange);
  const smoothTransform = useSpring(rawTransform, springConfig);

  const Component = motion[as] || motion.div;

  if (prefersReducedMotion) {
    return (
      <div ref={targetRef} className={className} style={style}>
        {children}
      </div>
    );
  }

  let motionStyles = {};
  if (direction === "vertical") motionStyles = { y: smoothTransform };
  else if (direction === "horizontal") motionStyles = { x: smoothTransform };
  else if (direction === "scale") motionStyles = { scale: smoothTransform };
  else if (direction === "rotate") motionStyles = { rotate: smoothTransform };
  else if (direction === "opacity") motionStyles = { opacity: smoothTransform };

  return (
    <Component
      ref={targetRef}
      className={className}
      style={{
        ...motionStyles,
        ...style,
      }}
    >
      {children}
    </Component>
  );
}
