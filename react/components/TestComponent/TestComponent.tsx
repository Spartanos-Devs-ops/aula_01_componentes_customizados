import React, { FunctionComponent, useState } from "react";
import { applyModifiers, useCssHandles } from "vtex.css-handles";

const CSS_HANDLES = ["title", "container", "textContainer"];

const TestComponent: FunctionComponent = () => {
  const handles = useCssHandles(CSS_HANDLES);
  const [active, setActive] = useState(false)

  return (
    <div className={handles.container}>
      <div className={handles.textContainer}>
        <h1 className={handles.title}>Olá mundo</h1>
      </div>
      <div className={applyModifiers(handles.container, active ? "isActive": "notActive")}>
        <button onClick={() => setActive(!active)}>Ativa/Desativa</button>
      </div>
    </div>
  );
};

export default TestComponent;
