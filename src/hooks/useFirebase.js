import {getAuth , updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword ,signInWithPopup , GoogleAuthProvider , signOut , onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";


import auth from "../firebase.init";

const useFirebase = () =>{
    const [users , setUsers] = useState({})
    const [isLoading , setIsLoadinng] = useState(true);
    const [user] = useAuthState(auth);


useEffect(()=>{
     const unsubscribed = onAuthStateChanged(auth , user=>{
             if(user){
                setUsers(user);
            }
            else{
                setUsers({})
            }
            setIsLoadinng(false)
           
           
        });
        return () => unsubscribed;

    }, [])




    return {
       
        isLoading
    }
}

export default useFirebase;