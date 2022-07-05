import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";

const axios = require("axios");

const GoogleLogin = ({ setCredential }) => {
  const [user, setUser] = useState(undefined);
  const googleLogin = useGoogleLogin({
    scope: ["https://www.googleapis.com/auth/calendar.events.readonly"],
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      setCredential(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );

      console.log(userInfo);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return (
    <div>
      <button onClick={googleLogin}>login</button>
    </div>
  );
};

export default GoogleLogin;
