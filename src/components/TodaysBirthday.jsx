// TodaysBirthday.jsx

import React, { useEffect, useState } from "react";

function TodaysBirthday() {
  const [birthdays, setBirthdays] = useState([]);

  useEffect(() => {
    fetch("https://rangandale.pythonanywhere.com/api/todays-birthdays")
      .then((response) => response.json())
      .then((data) => setBirthdays(JSON.parse(data)))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="TodaysBirthday">
      <h1 className="tb">Today's Birthdays</h1>
      <hr />
      <ul>
        {birthdays.map((person, index) => (
          <li key={index}>
            {index + 1}. {person["Student Name "]} - {person["Department"]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodaysBirthday;
