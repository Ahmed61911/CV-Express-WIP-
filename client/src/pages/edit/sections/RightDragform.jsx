import Preview from '../../preview/sections/cv1/Cv1';
import { useEffect, useRef } from "react";

function useDragger(id) {
  const isClicked = useRef(false);

  const coords = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const target = document.getElementById(id);
    if (!target) {
      console.error(`Element with id "${id}" doesn't exist`);
      return;
    }

    const container = target.parentElement;
    if (!container) {
      console.error("Target element must have a parent");
      return;
    }

    const onMouseDown = (e) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = () => {
      if (isClicked.current) {
        isClicked.current = false;
        coords.current.lastX = target.offsetLeft;
        coords.current.lastY = target.offsetTop;
      }
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      //const containerRect = container.getBoundingClientRect();
      //const targetRect = target.getBoundingClientRect();

      /*if(nextX >= 0 && nextX >= 0){
        target.style.top = `${nextY}px`;
        target.style.left = `${nextX}px`;
        target.style.position = "absolute"; // Ensure the element can be moved
      }*/
      target.style.top = `${nextY}px`;
      target.style.left = `${nextX}px`;
      target.style.position = "absolute"; // Ensure the element can be moved
      
    };

    target.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp); // Listen globally to handle mouse release outside
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    return () => {
      target.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
    };
  }, [id]);
}

const RightDragform = () => {
    useDragger("rect");
  return (
    <div
        id="rect"
        className="bg-black w-10/12 -z-2gi0"
        style={{ position: "relative", top: "0", left: "0" }} // Set initial position
      >
        <Preview />
    </div>
  )
}

export default RightDragform