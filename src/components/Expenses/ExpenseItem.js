import React from "react";

import "./ExpenceItem.css";
import ExpanseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <li>
      <div className="expense-item">
        <ExpanseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </li>
  );
};
export default ExpenseItem;
