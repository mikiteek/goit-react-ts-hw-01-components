import React from "react";
import Profile from "./components/Profile/Profile"
import user from "./user.json";

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
    </div>


  );
}

export default App;