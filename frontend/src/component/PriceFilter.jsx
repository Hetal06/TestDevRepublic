import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const PriceFilter = ({ onFilterChange }) => {
  const currencyValue = 40;

  const [values, setValues] = useState([0, 100]); // Initialize with some default values

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "0em",
      }}>
      <Range
        values={values}
        step={1}
        min={Math.floor(values[0])} // Ensure min is an integer
        max={Math.ceil(values[1])} // Ensure max is an integer
        onChange={(newValues) => setValues(newValues)}
        onFinalChange={(newValues) => onFilterChange(newValues)}
        renderTrack={({ props, children }) => (
          <div
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}>
            <output style={{ marginTop: "30px" }}>
              ${(currencyValue * values[0]).toFixed(0)}
            </output>
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#ef3f3e", "#ccc"],
                  min: values[0],
                  max: values[1],
                }),
                alignSelf: "center",
              }}>
              {children}
            </div>
            <output style={{ marginTop: "30px" }}>
              ${(currencyValue * values[1]).toFixed(0)}
            </output>
          </div>
        )}
        renderThumb={({ index, props }) => (
          <div
            {...props}
            key={index}
            style={{
              ...props.style,
              height: "12px",
              width: "7px",
              top: "15px",
              borderRadius: "60px",
              backgroundColor: "#ef3f3e",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}>
            <div
              style={{
                position: "absolute",
                top: "-30px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "12px",
                fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: "#ef3f3e",
              }}>
              ${(currencyValue * values[index]).toFixed(0)}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default PriceFilter;
