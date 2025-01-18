import NavBar from "./NavBar";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
function About(){
    const nav=useNavigate();
    const [un,setUn]=useState("");
    useEffect( ()=>{
        const username=localStorage.getItem("un");
        if(username!=null)
                setUn(un);
        else
            nav("/");
    },[]);
    return(
        <>
        <center>
        <NavBar/>
        <h1>About Page</h1>
        <h2>Name:Sahil Motiramani</h2>
        <h4 >Languages:Python,Java,Js</h4>
        <h4>Frameworks:Django,Hibernate,FLask</h4>
        <h4>Worked with react too</h4>
        <h5>Want to work on Ml,Nlp projects</h5>
        <h2>{un}</h2>
        </center>
        </>
    );
}
export default About;