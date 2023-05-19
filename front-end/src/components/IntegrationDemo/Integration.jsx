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
      <h2 className="section__title">Integration Demo</h2>
      
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
