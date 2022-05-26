import classes from "./Button.module.css";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import EmployeeContext from "../../store/emp-context";

const Button = (props) => {
    const [empID,setEmpID] = useState('');
    useEffect(()=>{
        setEmpID(props.title)
    },[props.title])
    const empCtx  = useContext(EmployeeContext);
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/User",{ state: {obj :empCtx.obj , userId : empID} });
  };
  return (
    <button className={classes.btn} onClick={onClickHandler}>
      {props.title}
    </button>
  );
};

export default Button;
