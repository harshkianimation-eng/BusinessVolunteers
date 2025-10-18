import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#ff6b6b",
      mixBlendMode: "difference",
      transition: { type: "tween", ease: "backOut", duration: 0.3 }
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      width: 150,
      height: 150,
      backgroundColor: "#4ecdc4",
      mixBlendMode: "difference",
      transition: { type: "tween", ease: "backOut", duration: 0.3 }
    },
    button: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      width: 80,
      height: 80,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
      transition: { type: "tween", ease: "backOut", duration: 0.3 }
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");

  useEffect(() => {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');
    const buttonElements = document.querySelectorAll('button, .btn, [role="button"]');
    
    textElements.forEach(element => {
      element.addEventListener("mouseenter", textEnter);
      element.addEventListener("mouseleave", textLeave);
    });

    buttonElements.forEach(element => {
      element.addEventListener("mouseenter", buttonEnter);
      element.addEventListener("mouseleave", buttonLeave);
    });

    return () => {
      textElements.forEach(element => {
        element.removeEventListener("mouseenter", textEnter);
        element.removeEventListener("mouseleave", textLeave);
      });
      buttonElements.forEach(element => {
        element.removeEventListener("mouseenter", buttonEnter);
        element.removeEventListener("mouseleave", buttonLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 50
      }}
      variants={variants}
      animate={cursorVariant}
    />
  );
};

export default Cursor;