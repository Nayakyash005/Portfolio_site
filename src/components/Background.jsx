import React from "react";
import styles from "./1.module.css";

export default function Background() {
  return (
    <div className={styles.area + " bg-gray-900"}>
      <ul class={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        {/* <li></li> */}
        <li></li>
        <li></li>
        {/* <li></li> */}
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
