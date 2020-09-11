import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const random = () => Math.floor(Math.random() * 256);

const Statistics = ({title, stats}) => (
  <section className={styles["statistics"]}>
    <h2 className={styles["title"]}>{title && title}</h2>
    <ul className={styles["stat-list"]}>
      {stats.map(({id, label, percentage}) => (
        <li key={id} className={styles["item"]} style={{backgroundColor: `rgb(${random()}, ${random()}, ${random()})`}}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
}

export default Statistics;