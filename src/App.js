import React from "react";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import statistics from "./data/statistical-data.json";
import friendList from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <div className="wrapper">
      <Profile
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        name={user.name}
        stats={user.stats}
      >
      </Profile>

      <Statistics
        title="Upload stats"
        stats={statistics}
      >
      </Statistics>

      <FriendList
       friends={friendList}
      >
      </FriendList>

      <TransactionHistory
        items={transactions}
      >
      </TransactionHistory>
    </div>
  );
}

export default App;