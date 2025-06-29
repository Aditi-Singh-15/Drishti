
import React, { useEffect, useRef, useState } from "react";

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: "fade-in" | "fade-in-up" | "scale-in" | "slide-in-right";
  once?: boolean;
}

export const Motion: React.FC<MotionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 500,
  animation = "fade-in-up",
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        } else if (!entry.isIntersecting && !once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, hasAnimated]);

  let animationClasses = "";
  switch (animation) {
    case "fade-in":
      animationClasses = "opacity-0 animate-fade-in";
      break;
    case "fade-in-up":
      animationClasses = "opacity-0 translate-y-8 animate-fade-in-up";
      break;
    case "scale-in":
      animationClasses = "opacity-0 scale-95 animate-scale-in";
      break;
    case "slide-in-right":
      animationClasses = "opacity-0 translate-x-8 animate-slide-in-right";
      break;
    default:
      animationClasses = "opacity-0 translate-y-8 animate-fade-in-up";
  }

  return (
    <div
      ref={ref}
      className={`${className} transition-all ${
        isVisible
          ? `${animationClasses} opacity-100 transform-none`
          : "opacity-0"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};
