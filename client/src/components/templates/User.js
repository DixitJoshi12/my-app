import classes from "./User.module.css";
import {  useNavigate } from "react-router-dom";

const User = (props) => {
  const user = props.value.user;
  let flag = props.id && props.value.user? true : false;

  const navigate = useNavigate();

  const onRedirectHandler = ()=>{
    navigate(-1);
  }
 
  return (
    <div className={classes.container}>
      {flag && <div className={classes.box}>
        <h1>Hello Mr. { props.value.user.Name }</h1>
        {
          <div className={classes.centered}>
              <h3>id : {user.id}</h3>
              <h3>name : {user.Name}</h3>
              <h3>education : {user.education}</h3>
              <h3>age : {user.age}</h3>
          </div>
          
        }</div>}
        <button className={classes.btn2} onClick={onRedirectHandler}>Back to Home</button>
    </div>
  );
};

export default User;
