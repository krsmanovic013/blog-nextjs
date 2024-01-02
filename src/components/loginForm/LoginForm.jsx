"use client";

import { loginUser } from "@/lib/actions";
import { useFormState } from "react-dom";
import Link from "next/link";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const [state, formAction] = useFormState(loginUser, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login with Credentials</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};
export default LoginForm;
