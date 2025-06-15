import { useEffect, useState } from 'react';

export const useScrollAnimation = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(elementRef);

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, [elementRef, threshold]);

  return { isVisible, setElementRef };
};

export const useSkillAnimation = () => {
  const [animateSkills, setAnimateSkills] = useState(false);
  const [skillsRef, setSkillsRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!skillsRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimateSkills(true), 100);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(skillsRef);

    return () => {
      if (skillsRef) {
        observer.unobserve(skillsRef);
      }
    };
  }, [skillsRef]);

  return { animateSkills, setSkillsRef };
};
