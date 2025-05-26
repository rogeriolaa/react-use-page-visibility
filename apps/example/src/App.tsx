import { useState, useEffect } from "react";
/// <reference types="node" />
import { usePageVisibility } from "@n0n3br/use-page-visibility";

function App() {
  const isVisible = usePageVisibility();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let intervalId: number = 0;
    if (isVisible) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isVisible]);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: isVisible ? "#e6ffe6" : "#ffe6e6",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        maxWidth: "500px",
        margin: "50px auto",
      }}
    >
      <h1>Page Visibility Example</h1>
      <p
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: isVisible ? "#28a745" : "#dc3545",
        }}
      >
        Page is currently: {isVisible ? "Visible" : "Hidden"}
      </p>
      <p
        style={{
          fontSize: "18px",
          color: "#333",
        }}
      >
        Timer: {timer} seconds
      </p>
      {!isVisible && (
        <p style={{ color: "#6c757d", fontSize: "14px" }}>
          Timer paused because the page is hidden.
        </p>
      )}
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: isVisible ? "lime" : "red",
          margin: "20px auto",
          transition: "background-color 0.3s ease-in-out",
        }}
      ></div>
      <p style={{ fontSize: "12px", color: "#666" }}>
        Try switching to another tab or minimizing the browser to see the
        changes.
      </p>
    </div>
  );
}

export default App;
