import React, { useRef, useEffect } from 'react';
import './App.css';

interface FadeInSectionProps {
  children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    });

    observer.current?.observe(sectionRef.current!);

    return () => {
      // Clean up the observer when the component is unmounted
      observer.current?.disconnect();
    };
  }, []);

  return <section ref={sectionRef} className="fade-section">{children}</section>;
};

export default FadeInSection;
