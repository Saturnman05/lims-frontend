import { Button } from "antd";
import "../../styles/custom-button/styles.css";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export function CustomButton(props) {
  const { children } = props;
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    let angle = 0;
    const rotateGradient = () => {
      angle = (angle + 1) % 360;
      element.style.setProperty('--gradient-angle', `${angle}deg`);
      requestAnimationFrame(rotateGradient);
    };

    rotateGradient();

    return () => cancelAnimationFrame(rotateGradient);
  }, []);

  return (
    <Button className="border-gradient" ref={elementRef} {...props}>
      <div>{children}</div>
    </Button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
};