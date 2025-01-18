import NavBar from './NavBar';
import {useState,useRef,useEffect} from 'react';
import app from './Firebase';
import {getAuth,sendPasswordResetEmail} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
function ForgotPassword(){
    const nav=useNavigate();
    const [un,setUn]=useState("");
    useEffect( ()=>{
        const username=localStorage.getItem("un");
        if(username!=null)
                nav("/home");
    },[]);

    const rUsername=useRef();
    
    const[username,setUserName]=useState("");
    const[msg,setMsg]=useState("");

    const hUsername=(event)=>{setUserName(event.target.value);}
    
    const save=(event)=>{
        event.preventDefault();

        if(username===""){
            alert("please enter username");
            setMsg("");
            rUsername.current.focus();
            return;
        }
        const auth=getAuth();
        sendPasswordResetEmail(auth,username)
        .then(res=>{
            alert("check mail");
            nav("/");
            
        })
        .catch(err=>{
            setMsg("issue"+err);
        });
        
        
    }
    

    return(
        <>
        <center>
        <NavBar/>
        <h1>ForgotPassword page</h1>
        <form onSubmit={save}>
            <input type='email' placeholder='enter email'ref={rUsername} onChange={hUsername} value={username}/>
            <br/><br/>
            <input type='submit' value='Forgot Password'/> 
        </form>
            <h2>{msg}</h2>
            </center>
        </>
    );
}
export default ForgotPassword;