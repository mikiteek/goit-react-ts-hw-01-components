import React from "react";
import styles from "./Statistics.module.css";

const random = () => Math.floor(Math.random() * 256);

interface StatisticsProps {
    title: string,
    stats: any,
}
interface statsProps {
    id: string,
    label: string,
    percentage: string,
}

const Statistics = ({title, stats}: StatisticsProps) => (
  <section className={styles["statistics"]}>
    <h2 className={styles["title"]}>{title && title}</h2>
    <ul className={styles["stat-list"]}>
      {stats.map(({id, label, percentage}: statsProps) => (
        <li key={id} className={styles["item"]} style={{backgroundColor: `rgb(${random()}, ${random()}, ${random()})`}}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;