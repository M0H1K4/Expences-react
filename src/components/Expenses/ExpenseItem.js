import React, { useState } from "react";

import "./ExpenceItem.css";
import ExpanseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler= () => {
    setTitle("lamazi xar shechema <3")
  }

  return (
    <div className="expense-item">
      <ExpanseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </div>
  );
};
export default ExpenseItem;
