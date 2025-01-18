import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function NavBar(){
    const [un,setUn]=useState("");
    useEffect(()=>{
        const username=localStorage.getItem("un");
        if(username===null)
            setUn(null);
        else
            setUn(username);
    },[]);
    return(
        <>
        <center>
            <div className="nav">
              {(un===null)&&  (<Link to="/">Login</Link>)}
               {(un===null)&& (<Link to="/signup">SignUp</Link>)}
                {(un===null)&& (<Link to="/fp">Forgot Password</Link>)}
                {(un!==null)&& ( <Link to="/home">Home</Link>)}
                {(un!==null)&& (<Link to="/about">About</Link>)}
                    {(un!==null)&& (<Link to="/cp">Change Password</Link>)}
            </div>
        </center>
        </>
    );
}
export default NavBar;