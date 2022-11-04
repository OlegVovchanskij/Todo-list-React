import React from "react";
import styles from "./item.module.css";
const Item = (props) => {
  return (
    <div className={styles.item}>
      <div onClick={props.func} className={styles.remove}></div>
      <h4 className={styles.title}>{props.text}</h4>
    </div>
  );
};

export default Item;
