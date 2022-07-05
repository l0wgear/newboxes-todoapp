import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogo from "../assets/g-logo.png";

const axios = require("axios");

const GoogleLogin = ({ setCredential }) => {
  const [user, setUser] = useState(undefined);
  const googleLogin = useGoogleLogin({
    // scope: ["https://www.googleapis.com/auth/calendar.events.readonly"],
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      setCredential(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );
      setUser(userInfo.data);
      console.log(userInfo);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return !user ? (
    <button
      onClick={googleLogin}
      className="h-[40px] text-slate-600 p-3 flex items-center justify-center gap-[24px] bg-white rounded active:outline-2 active:outline-sky-500 font-roboto font-semibold text-[14px]"
    >
      <img src={GoogleLogo} alt="Google logo" className="w-[18px]" />
      Sign in with Google
    </button>
  ) : (
    <div className="flex items-center justify-center gap-2">
      <img
        src={user.picture}
        alt="user"
        referrerpolicy="no-referrer"
        className="w-10 rounded-full"
      />
      <div className="flex flex-col">
        <span>{user.name}</span>
        <span className="text-sm">{user.email}</span>
      </div>
    </div>
  );
};

export default GoogleLogin;
