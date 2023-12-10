import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import gsap from "gsap";
const Circle = forwardRef(({ size, delay }, ref) => {
  console.log(ref, "Hi");
  const el = useRef();

  useImperativeHandle(
    ref,
    () => {
      // return our API
      console.log("from imperative");
      return {
        moveTo(x, y) {
          console.log("before gsap");
          gsap.to(el.current, { x, y, delay });
          console.log("after gsap");
        },
      };
    },
    [delay]
  );

  return <div className={`circle ${size} gradient-blue`} ref={el}></div>;
});

export const CircleApp = () => {
  const circleRefs = useRef([]);

  // reset on re-renders
  circleRefs.current = [];

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    circleRefs.current.forEach((ref) =>
      ref.moveTo(innerWidth / 2, innerHeight / 2)
    );

    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addCircleRef = (ref) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

  return (
    <div className="app">
      <p>Move your mouse around</p>
      <Circle size="sm" ref={addCircleRef} delay={0} />
      <Circle size="md" ref={addCircleRef} delay={0.1} />
      <Circle size="lg" ref={addCircleRef} delay={0.2} />
    </div>
  );
};
