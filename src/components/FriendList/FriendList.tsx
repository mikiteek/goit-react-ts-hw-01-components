import React from "react";
import styles from "./FriendList.module.css";

interface FriendListProps {
  friends: any,
}

interface friendProps {
  avatar: string,
  name: string,
  isOnline: boolean,
  id: string
}

const FriendList = ({friends}: FriendListProps) => {
  return (
    <ul className={styles["friend-list"]}>
      {friends.map(({avatar, name, isOnline, id}: friendProps) => {
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

export default FriendList;