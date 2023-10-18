"use client"
import { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className={`preloader ${loading ? 'active' : ''}`}>
        <div className="loader__figure"></div>
        </div>
    </>

  );
};

export default Preloader;
