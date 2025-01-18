import NavBar from './NavBar';
import {useState,useRef,useEffect} from 'react';
import app from './Firebase';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
function Login(){
    const nav=useNavigate();
    const [un,setUn]=useState("");
    useEffect( ()=>{
        const username=localStorage.getItem("un");
        if(username!=null)
                nav("/home");
    },[]);

    const rUsername=useRef();
    const rPassword=useRef();
    

    const[username,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const[msg,setMsg]=useState("");

    const hUsername=(event)=>{setUserName(event.target.value);}
    const hPassword=(event)=>{setPassword(event.target.value);}
    
    const save=(event)=>{
        event.preventDefault();

        if(username===""){
            alert("please enter username");
            setMsg("");
            rUsername.current.focus();
            return;
        }
        if(password===""){
            alert("please enter password");
            setMsg("");
            rPassword.current.focus();
            return;
        }
        
        const auth=getAuth();
        signInWithEmailAndPassword(auth,username,password)
        .then(res=>{
            localStorage.setItem("un",username);
            nav("/home");
        })
        .catch(err=>{
            setMsg("issue"+err);
        });
        
        
    }
    

    return(
        <>
        <center>
        <NavBar/>
        <h1>Login page</h1>
        <form onSubmit={save}>
            <input type='email' placeholder='enter email'ref={rUsername} onChange={hUsername} value={username}/>
            <br/><br/>
            <input type='password' placeholder='enter password'ref={rPassword} onChange={hPassword} value={password}/>
            <br/><br/>
            <input type='submit' value='Login'/> 
        </form>
            <h2>{msg}</h2>
            </center>
        </>
    );
}
export default Login;