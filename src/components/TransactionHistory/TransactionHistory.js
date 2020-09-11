import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({items}) => {
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
      {items.map(({id, type, amount, currency}) => (
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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )
}

export default TransactionHistory;