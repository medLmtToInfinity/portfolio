"use client"
import React, { useEffect, useState, useRef, ReactElement } from 'react';

function HoverEffect() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  let x = useRef(0);
  let y = useRef(0)

  useEffect(() => {
    setIsMounted(true);
  }, [])
  const ref : any = useRef(null);

  useEffect(() => {
    setIsHovered(false);
      window.addEventListener("mousemove", (event) => {
            x.current = event.clientX;
            y.current = event.clientY + window.scrollY;
            //let _position = `X: ${x}<br>Y: ${y}`;
            if(ref.current) ref.current.style.background = `radial-gradient(600px at ${x.current}px ${y.current}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
            setIsHovered(true);

      })
  }, [isHovered])
  if(!isMounted) return null;

  const divStyle = {
    background: isHovered
      ? `radial-gradient(600px at ${x.current}px ${y.current}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      : 'none',
  };


  return (
    <div
        ref={ref}
      className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'
      style={divStyle}
    />
  );
}

export default HoverEffect;
