import React, { useState, useContext ,useEffect} from "react"; // Import useContext from React

// Rest of your code...
import { StyleSheet, Image } from "react-native";
import authApi from '../api/auth'
const jwtDecode = require('jwt-decode');

// Yup
import * as yup from "yup";

import Screen from "../componenets/Screen";
import {ErrorMessage,AppFormField,SubmitButton,AppForm} from "../componenets/forms/Index";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";


const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"), // Fix the typo here
});

function LoginScreen(props) {

  const authContext = useContext(AuthContext)

  const [loginFailed,setLoginFailed]=useState(false);
  const handelSubmit=async ({email,password})=>{
    const result=await authApi.login(email,password)
    console.log("enter",email)
    if(!result.ok) setLoginFailed(true)
    setLoginFailed(false);
  const user=jwtDecode(result.data);
  authContext.setUser(user);
  authStorage.storeToken(result.data)
  console.log("fd",user);
  }
const restoreToken=async()=>{
  const token= await authStorage.getToken();
  if(!token) return;
  authContext.setUser(jwtDecode(token));
}

  useEffect(()=>{
    restoreToken();
  },[])

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handelSubmit}
        validationSchema={validationSchema} // Add validation schema
      >
      <ErrorMessage error="Invalid email" visible={loginFailed}/>
        <AppFormField
          autoCapitalized="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalized="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          secureTextEntry
          placeholder="Password"
          textContentType="password"
        />
        <SubmitButton title="Login"/>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default LoginScreen;
