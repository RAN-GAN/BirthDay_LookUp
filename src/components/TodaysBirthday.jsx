// TodaysBirthday.jsx

import React, { useEffect, useState } from "react";

function TodaysBirthday() {
  const [birthdays, setBirthdays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rangandale.pythonanywhere.com/api/todays-birthdays")
      .then((response) => response.json())
      .then((data) => {
        setBirthdays(JSON.parse(data));
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (loading) {
    return (
      <div className="TodaysBirthday">
        <h1 className="tb">Todays Birthdays</h1>
        <hr />
        <ul>
          <li>Loading...</li>
        </ul>
      </div>
    );
  } else {
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
}

export default TodaysBirthday;
