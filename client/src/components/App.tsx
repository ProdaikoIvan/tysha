import React, { useEffect, useState } from "react";
import Calendar from "./calendar/calendar";

const App: React.FC = () => {
  const fetchSheetInfo = async () => {
    try {
      const response = await fetch("http://localhost:3001/google/sheet");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Запит до бекенду NestJS
    // fetchSheetInfo();
  }, []);

  return (
    <div>
      <h1>Привіт з React + TypeScript + Webpack!</h1>
      <Calendar></Calendar>
    </div>
  );
};

export default App;
