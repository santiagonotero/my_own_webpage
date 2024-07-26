import React, {useEffect} from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ id, delay =0 , children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const linkElement = document.querySelector(`#${id}`);
    if (linkElement) {
      if (inView) {
        linkElement.classList.add('active');
      } else {
        linkElement.classList.remove('active');
      }
    }
  }, [inView, id]);


  return (
    <div
      id={id}
      ref={ref}
      style={{transitionDelay: `${delay}ms`} }
      className={`transition-opacity delay-[${delay}ms] duration-1000 ease-in-out ${
        inView ? 'opacity-100 animate-fadeIn' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;