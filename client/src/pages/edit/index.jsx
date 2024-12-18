import React, { useState } from "react";
import LeftEdit from "./sections/LeftEdit";
import RightEdit from "./sections/RightEdit";

const Index = ({ initialWidth = 800, maxWidth = 1000 }) => {
  const [leftWidth, setLeftWidth] = useState(initialWidth); // Set initial width from props
  const minWidth = 600; // Minimum width for the left section

  const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startLeftWidth = leftWidth;

    const onMouseMove = (event) => {
      const newLeftWidth = startLeftWidth + (event.clientX - startX);
      // Enforce both minWidth and maxWidth constraints
      setLeftWidth(Math.min(Math.max(minWidth, newLeftWidth), maxWidth));
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="flex w-full h-full">
      {/* Left Section */}
      <div
        className="min-h-full bg-blue-100 z-20"
        style={{ width: `${leftWidth}px` }}
      >
        <LeftEdit />
      </div>

      {/* Resizable Slider */}
      <div
        className="relative overflow w-2 border-l-2 border-r-2 z-10 border-slate-400 cursor-ew-resize min-h-max bg-gray-200 justify-center align-middle"
        onMouseDown={handleMouseDown}
      >
      </div>

      {/* Right Section */}
      <div
        className="flex-1  min-h-max bg-red-200"
        style={{ width: `calc(100% - ${leftWidth}px - 2px)` }} // Adjust dynamically
      >
        <RightEdit />
      </div>
    </div>
  );
};

export default Index;
