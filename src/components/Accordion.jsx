import React, { useEffect, useRef } from 'react';
import './Accordion.css';
import gsap from 'gsap';

const Accordion = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const items = itemsRef.current;
    console.log(items)
    const expand = (item, i) => {
      items.forEach((it, ind) => {
        if (i === ind){ 
            return
        } else {
            it.clicked = true;
        }
        
        console.log(it.clicked)
      });
      
      gsap.to(items, {
        width: item.clicked ? '15vw' : '8vw',
        duration: 2,
        ease: 'elastic(1, .6)',
      });

      item.clicked = !item.clicked;
      gsap.to(item, {
        width: item.clicked ? '30vw' : '15vw',
        duration: 2.5,
        ease: 'elastic(1, .3)',
      });
    };

    items.forEach((item, i) => {
      item.clicked = false;
      item.addEventListener('click', () => expand(item, i));
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener('click', () => expand(item, i));
      });
    };
  }, []);

  return (
    <div className="group">
      {[
        'https://images.unsplash.com/photo-1557750255-c76072a7aad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1678784844961-ed791aff9817?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1571041804726-53e8bf082096?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ].map((url, index) => (
        <div
          key={index}
          className="item"
          style={{ backgroundImage: `url(${url})` }}
          ref={(el) => (itemsRef.current[index] = el)}
        ></div>
      ))}
    </div>
  );
};

export default Accordion;
