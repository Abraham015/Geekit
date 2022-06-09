import { Navigate } from "react-router-dom";

const { createContext ,useState, useEffect } = require("react");

export const AccountContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: null });
  
  useEffect(()=>{
    fetch("http://localhost:4000/auth/inicio",{
      credentials: "include",
    }).catch(e=>{
      setUser({loggedIn: false});
      return;
    }).then(r=>{
      if(!r || !r.ok || r.status>=400){
        setUser({loggedIn: false});
        return;
      }
      return r.json();
    }).then(data=>{
      if(!data){
        console.log("not logged in");
        setUser({loggedIn: false});
        return;
      }
      console.log("Logged In");
      setUser({...data});
      Navigate("/Home");
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (<AccountContext.Provider value={{ user, setUser }}>{children}</AccountContext.Provider>);
};

export default UserContext;