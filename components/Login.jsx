"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import ChatGPTLogo from "@/assets/images/chatgpt-logo.png";
import GoogleIcon from "@/assets/images/google-icon.png";

function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <Image width={50} height={50} src={ChatGPTLogo} alt="logo" />

      <h2>Авторизация</h2>

      <button
        className="google-button text-black font-bold text-3xl flex justify-center items-center bg-white p-4 gap-3 rounded-lg shadow-lg hover:shadow-none"
        onClick={() => signIn("google")}
      >
        <Image src={GoogleIcon} width={20} height={20} alt="Google logo" />
        Продолжить с Google
      </button>
    </div>
  );
}

export default Login;
