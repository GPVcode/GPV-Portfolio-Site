import React from "react";
import { useState } from "react";
import Button from "./Button";

const Integration = () => {

const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    {window.dataLayer.push({ 'event': 'DemoButtonClick'})}
  };

  return (
    <section >
      <h3 className="section__title">
        Integration Specialist Demo - Welcome! This site is currently being used for a project and will go back to its original form (plus) updates soon. To those this concerns, please see below for the project demo.
      </h3>
      <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh'
        }}>
      <Button className="section__title" onClick={handleClick}>Demo Button</Button>
      </div>
    </section>
  );
};

export default Integration;
