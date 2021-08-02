import React from "react";
import classes from './ResumeItem.module.css';

function ResumeItem(props) {
  return (
    <li>
      <p className={classes.what}>{props.what}</p>
      <p className={classes.where}>{props.where}</p>
      <p className={classes.when}>{props.when}</p>
      <p className={classes.description}>{props.description}</p>
    </li>
  );
}

export default ResumeItem;