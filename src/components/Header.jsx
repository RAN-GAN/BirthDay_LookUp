import React from "react";
function GetDate() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
function Header() {
  const date = GetDate();
  return (
    <div className="header">
      <div className="element">Campus BDays</div>
      <div className="element">
        <p>Find Out Who's BirthDay is next</p>
      </div>
      <div className="element">
        <p>
          Date:
          <span>{date}</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
