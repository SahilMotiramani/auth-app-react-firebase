import NavBar from "./NavBar";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    const nav=useNavigate();
    const [un,setUn]=useState("");
    useEffect( ()=>{
        const username=localStorage.getItem("un");
        if(username!=null)
                setUn(username);
        else
            nav("/");
    },[]);
    const lo=(event)=>{
        event.preventDefault();
        localStorage.removeItem("un");
        nav("/");
    }
    return(
        <>
        <center>
        <NavBar/>
        <h1>Home Page</h1>
        <h2>Welcome {un}</h2>
        <form onSubmit={lo}>
            <input type="submit" value="Logout"/>
        </form>
        </center>
        </>
    );
}
export default Home;