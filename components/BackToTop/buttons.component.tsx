"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <button className="btn" onClick={() => signIn()}>
      Login 
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" className="btn" >
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button className="btn" onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return <Link className="btn" href="/profile">Profile</Link>;
};
