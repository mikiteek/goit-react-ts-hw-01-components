import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendList = ({friends}) => {
  return (
    <ul className={styles["friend-list"]}>
      {friends.map(({avatar, name, isOnline, id}) => {
        const statusClasses = [styles.status, isOnline? styles.isOnline : styles.isOffline];
        return (
          <li key={id} className={styles["item"]}>
            <span className={statusClasses.join(" ")}></span>
            <img className={styles["avatar"]} src={avatar} alt={name} width="48"/>
            <p className={styles["name"]}>{name}</p>
          </li>
        )
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  )
};

export default FriendList;