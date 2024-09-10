import { Errors } from "@/constants/Messages";
import { router } from "expo-router";
import { useState } from "react";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*.])(?=.{8,})/;
    return passwordRegex.test(password);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (!validateEmail(text)) {
      setEmailError(Errors.errorEmail);
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (!validatePassword(text)) {
      setPasswordError(
        Errors.errorPassword
      );
    } else {
      setPasswordError("");
    }
  };

  const onPressLogin = () => {
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError(Errors.errorEmail);
      isValid = false;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        Errors.errorPassword
      );
      isValid = false;
    }

    if (isValid) {
      reset();
      router.replace("/(blog)/list");
    }
  };

  const reset = ()=>{
    setEmail('');
    setPassword('')
  }

  return {
    email,
    password,
    showPassword,
    emailError,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
    setShowPassword,
    onPressLogin,
    reset
  };
};
