import React from "react";
import styles from "./TransactionHistory.module.css";

interface TransactionHistoryProps {
  items: any,
}

interface itemsProps {
  id: string,
  type: string,
  amount: string,
  currency: string,
}

const TransactionHistory = ({items}: TransactionHistoryProps) => {
  return (
    <table className={styles["transaction-history"]}>
      <thead>
      <tr className={styles["table-row"]}>
        <th className={styles["table-header"]}>Type</th>
        <th className={styles["table-header"]}>Amount</th>
        <th className={styles["table-header"]}>Currency</th>
      </tr>
      </thead>

      <tbody>
      {items.map(({id, type, amount, currency}: itemsProps) => (
        <tr key={id} className={styles["table-row"]}>
          <td className={styles["table-td"]}>{type}</td>
          <td className={styles["table-td"]}>{amount}</td>
          <td className={styles["table-td"]}>{currency}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default TransactionHistory;