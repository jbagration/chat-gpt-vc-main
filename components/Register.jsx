"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import ChatGPTLogo from "@/assets/images/chatgpt-logo.png";
import GoogleIcon from "@/assets/images/google-icon.png";

function Register() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <Image width={50} height={50} src={ChatGPTLogo} alt="logo" />

      <h2>Авторизация</h2>

<form action="#main">
    <p>
      <input type="email" id="email" name="email" placeholder="Email"></input>
      <label for="email" id="emailLabel"></label>
    </p>
    <p>
      <input type="password" id="password" name="password" placeholder="Пароль"></input>
      <label for="password" id="passwordLabel"></label>
    </p>
    <p>
      <input type="submit" value="Продолжить" id="submitBtn" disabled></input>
    </p>
  </form>

<h5>Нет аккаунта? <Link href="/login">Зарегистрируйтесь</Link></h5>


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

export default Register;
