import classes from "./Home.module.css";
import Button from "../atoms/Button";

import React from "react";

const Home = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <ul>
          {props.value.map((item) => (
            <li key={(Math.random() * 10) / 10}>
              {" "}
              <Button title={item.Name} />
            </li>
          ))}
        </ul>
      </div>
      <div className={classes["bot-box"]}>
        <div className={classes.chatbox}>
          <div className={classes.row}>
            <h2 className={classes.question}>Hi</h2>
            <h2 className={classes.answer}>Hello how are you today</h2>
          </div>
          <div className={classes.column}>
            <input type="text" value="" placeholder="Type the message..."/>
            <button className={classes.submit}>submit</button>
          </div>
        </div>
        <div className={classes.bot}>
          <button>Chat now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
// export default React.memo(Home);
