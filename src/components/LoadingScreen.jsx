import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Welcome To My Space/>"; //the end state

  useEffect(() => {
    let index = 0; //the letter is being typed
    //rerun(type a character) every 100ms
    const interval = setInterval(() => {
      setText(fullText.substring(0, index)); //every time the interval runs, it will display one extra letter
      index++;

      // Stop the interval and (1 second after) hide the LoadingScreen when the entire text is typed out
      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval); // stops the existing interval when the component unmounts or before useEffect runs again
    // otherwise it will cause memory leaks—the interval would keep running in the background, even if the user leaves the page
  }, [onComplete]); //it runs once on the first render, or if onComplete changed

  return (
    // The 'inset' class sets the distance between an element and the parent element (t/b/l/r)
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col justify-center items-center">
      {/* typewriter */}
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        {/* Blinking cursor */}
        <span className="animate-blink ml-1"> | </span>
      </div>

      {/* progress bar */}
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        {/* Moving bar with glowing effect */}
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
