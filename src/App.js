import React from "react";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import user from "./user.json";
import statistics from "./statistical-data.json";

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
    </div>


  );
}

export default App;