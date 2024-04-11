function formatDate(timestamp) {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

import React, { useEffect, useState } from "react";

function FutureBirthday() {
  const [birthdays, setBirthdays] = useState([]);

  useEffect(() => {
    fetch("https://rangandale.pythonanywhere.com/api/future-birthdays")
      .then((response) => response.json())
      .then((data) => setBirthdays(JSON.parse(data)))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="TodaysBirthday">
      <h1 className="tb">Upcoming Birthdays</h1>
      <hr />
      <ul>
        {birthdays.map((person, index) => (
          <li key={index}>
            {index + 1}. {person["Student Name "]} -{" "}
            {formatDate(person["Date of Birth"])} - {person["Department"]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FutureBirthday;
