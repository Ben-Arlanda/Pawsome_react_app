import { useState } from 'react'
// firebase function to enable create users in account 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
  // onAuthState is a function that is triggered everytime there is a change in the auth state 
import { auth } from './firebase-config'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css';



export default function Login() {
  //state to store the value/input of email and password details
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [user, setUser] = useState({})

  let navigate = useNavigate()

  useEffect(() => {

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)

    })

  }, [])


  //firebase functions return a promise, use async 
  const register = async () => {
    try {
      // await for promise being returned then variable 'user' gets the promise. CreateUserWithEmailandPAasword auto generates and sends to firebase console 
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword) // pass in auth object from firebase-config and register email/password from state 
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user)
      // Redirect to the main page after logout
      navigate('/home')
    } catch (error) {
      console.log(error.message)
    }

  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <div className="Login">
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          //settting up event for onChange when value is input and use state 
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          type="password"
          onChange={(event) => { setRegisterPassword(event.target.value) }}
        />

        {/* pass in the register function when create user button is clicked  */}
        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value)
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value)
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      {/* display when registered user is logged in  */}
      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );

}
