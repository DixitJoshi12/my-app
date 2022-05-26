import "./App.css";
import { Routes, Route,useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import React from "react";
import Home from "./components/templates/Home";
import User from "./components/templates/User";
import EmployeeContext from "./store/emp-context";


function App() {
  const [getEmployees, setGetEmployee] = useState([
  ]);

  const [user,setUser] = useState({});

  const {state} = useLocation();
 
  useEffect(()=>{
    if(state){
      const user = getEmployees.find(item => item.Name === state.userId);
      setUser((prev)=>{
        return {
          ...prev,
          user
        }
      });
    }
  },[getEmployees,state])
  const getEmp = async () => {
    const response = await fetch("http://localhost:8080");
    const data = await response.json();
    setGetEmployee(data);
  }

  useEffect(() => {
    getEmp();
  }, []);
  return (
    <EmployeeContext.Provider
      value={{
        login : true,
        obj : getEmployees
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<Home value={getEmployees}></Home>}></Route>
          <Route path="/User" element={<User value={user} id={state ? state.userId : ""}/>}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </div>
    </EmployeeContext.Provider>
  );
}

export default App;
