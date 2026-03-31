import { useEffect } from 'react'

// Lightweight implementation using native scroll-behavior and Lenis-like feel via CSS.
// To avoid layout breaking, we don't hijack the native scroll container
// but we just orchestrate initialization.
export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Add smooth scrolling class to html
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Fallback cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      {children}
    </>
  );
}
