import React from "react";

const NavigationDots = ({ active }:any) => (
  <div className="app__navigation">
    {["home", "about", "work", "skills", "testimonial", "contact"].map(
      (item, index) => (
        //@ts-ignore
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      )
    )}
  </div>
);

export default NavigationDots;
