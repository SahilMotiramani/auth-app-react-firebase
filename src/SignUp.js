import NavBar from './NavBar';
import {useState,useRef,useEffect} from 'react';
import app from './Firebase';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
function SignUp(){
    const nav=useNavigate();
    const [un,setUn]=useState("");
    useEffect( ()=>{
        const username=localStorage.getItem("un");
        if(username!=null)
                nav("/home");
    },[]);

    const rUsername=useRef();
    const rPassword1=useRef();
    const rPassword2=useRef();

    const[username,setUserName]=useState("");
    const[password1,setPassword1]=useState("");
    const[password2,setPassword2]=useState("");
    const[msg,setMsg]=useState("");

    const hUsername=(event)=>{setUserName(event.target.value);}
    const hPassword1=(event)=>{setPassword1(event.target.value);}
    const hPassword2=(event)=>{setPassword2(event.target.value);}

    const save=(event)=>{
        event.preventDefault();

        if(username===""){
            alert("please enter username");
            setMsg("");
            rUsername.current.focus();
            return;
        }
        if(password1===""){
            alert("please enter password");
            setMsg("");
            rPassword1.current.focus();
            return;
        }
        if(password2===""){
            alert("please enter password");
            setMsg("");
            rPassword2.current.focus();
            return;
        }
        
        if(password1===password2){
            const auth=getAuth();
            createUserWithEmailAndPassword(auth,username,password1)
            .then(res=>{
                alert("acc created");
                nav("/");
            })
            .catch(err=>{
                setMsg("issue" +err);

            });

            
        }
        else{
            alert("passwords didnt match");
            setPassword1("");
            setPassword2("");
            rPassword1.current.focus();
            return;
        }
        
    }
    

    return(
        <>
        <center>
        <NavBar/>
        <h1>Sign Up page</h1>
        <form onSubmit={save}>
            <input type='email' placeholder='enter email'ref={rUsername} onChange={hUsername} value={username}/>
            <br/><br/>
            <input type='password' placeholder='enter password'ref={rPassword1} onChange={hPassword1} value={password1}/>
            <br/><br/>
            <input type='password'placeholder='enter confirm password'ref={rPassword2} onChange={hPassword2} value={password2}/>
            <br/><br/>
            <input type='submit' value='register'/> 
        </form>
            <h2>{msg}</h2>
            </center>
        </>
    );
}
export default SignUp;