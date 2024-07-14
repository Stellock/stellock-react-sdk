import { GoogleLogin } from "@react-oauth/google";
// import { CustomJwtPayload } from "../lib/interfaces";
import { jwtDecode } from "jwt-decode";

const AuthModal = () => {
  return (
    <div className="bg-red-500">
      <div>
        <div className="bg-slate-600">
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              console.log(jwtDecode(credentialResponse.credential as string));
              // const data = jwtDecode(
              //   credentialResponse.credential as string
              // ) as CustomJwtPayload;
              // await login(data.email);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          <br />
          <button>Github</button>
          <br />
          <button>Twitch</button>
          <br />
        </div>
      </div>
      <div className="bg-blue-500">
        <label>Email</label>
        <br />
        <input type="email" placeholder="mail@example.com" />
        <br />
        <button>Sign in with Email</button>
      </div>
      <div className="bg-green-400">
        <button>Connect Wallet</button>
      </div>
    </div>
  );
};

export default AuthModal;
