import { useEffect, useRef } from "react";

// accept children as a prop to specify which component we want to review
export const RevealOnScroll = ({ children }) => {
  // Create a ref to attach to the DOM element we want to observe. Initially ref.current is null
  const ref = useRef(null);
  // set up the scroll observation logic to detect when the element enters the viewport
  // once entered, add visible class to the element
  useEffect(() => {
    // IntersectionObserver watches elements and tells us when they appear/disappear from the viewport.
    const observer = new IntersectionObserver(
      // The observer provides an array of "entries" (elements being watched),+
      // but we only need the first one (entry), so we use array destructuring [entry].
      ([entry]) => {
        // If the element is in view
        if (entry.isIntersecting) {
          // ref.current lets us access to the actual div in the DOM,
          // .classList.add("visible") adds the visible class to div's classList.
          ref.current.classList.add("visible");
        }
      },
      // The function runs when at least 20% of the element is visible.
      // The intersection area is now 50px higher than viewport (Observer’s detection bottom was moved up 50px), so adding visible class trigger LATER (require more scrolling)
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    // if the div exists, the observer starts watching it to prevent memory leaks
    if (ref.current) {
      observer.observe(ref.current);
    }
    // When the div unmounts, stop watching it
    return () => observer.disconnect();
  });
  return (
    // track the ref so that we can detect if the user is scrolling through this specific div
    // reveal is a custom css class that the content is hidden (opacity: 0) and slightly offset (20px down)
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};
