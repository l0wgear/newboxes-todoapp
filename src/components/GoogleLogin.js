import React, { useState, useEffect } from "react";
import { useGoogleLogin, hasGrantedAllScopesGoogle } from "@react-oauth/google";
import GoogleLogo from "../assets/g-logo.png";

const axios = require("axios");

const GoogleLogin = ({ setCredential, setHasAccess }) => {
  const [user, setUser] = useState(undefined);
  const [timeoutSec, setTimeoutSec] = useState(undefined);
  const googleLogin = useGoogleLogin({
    scope: ["https://www.googleapis.com/auth/calendar.events"],
    onSuccess: async (tokenResponse) => {
      setCredential(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );
      setHasAccess(
        hasGrantedAllScopesGoogle(
          tokenResponse,
          "https://www.googleapis.com/auth/calendar.events"
        )
      );
      setUser(userInfo.data);
      setTimeoutSec(tokenResponse.expires_in);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  useEffect(() => {
    if (user && timeoutSec) {
      setTimeout(() => {
        setUser(undefined);
        setCredential(undefined);
        setTimeoutSec(undefined);
      }, (timeoutSec - 60) * 1000);
    }
  }, [user, timeoutSec, setCredential]);

  return !user ? (
    <button
      onClick={googleLogin}
      className="h-[40px] text-slate-600 p-3 flex items-center justify-center gap-[24px] bg-white rounded active:outline-2 active:outline-sky-500 font-roboto font-semibold text-[14px]"
    >
      <img src={GoogleLogo} alt="Google logo" className="w-[18px]" />
      Sign in with Google
    </button>
  ) : (
    <div className="flex items-center justify-center gap-2 h-[40px] text-slate-200">
      <img
        src={user.picture}
        alt="user"
        referrerPolicy="no-referrer"
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
