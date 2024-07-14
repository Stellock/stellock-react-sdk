import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useTwitchAuth } from "../providers/TwitchProvider";
import { useGithubAuth } from "../providers/GithubProvider";
import login from "../helpers/login";
import { CustomJwtPayload } from "../lib/interfaces";
import ConnectButton from "./ConnectButton";

const AuthModal = () => {
  const { login: githubLogin } = useGithubAuth();
  const { login: twitchLogin } = useTwitchAuth();

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Stellock</h1>
        <h2 className="text-xl text-center mb-4">Welcome Back</h2>
        <form>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              placeholder="sarthak@example.com"
            />
          </div>
          <div className="my-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              placeholder="******"
            />
          </div>
          <div className="mb-4 text-right">
            <a href="#" className="text-indigo-500 hover:underline text-sm">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-black/60"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-center my-4">
          <span className="border-t border-gray-300 w-full"></span>
          <span className="mx-4 text-gray-500">OR</span>
          <span className="border-t border-gray-300 w-full"></span>
        </div>
        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-black/60 mb-4">
          <ConnectButton />
        </button>
        <div className="flex items-center justify-center my-4">
          <span className="border-t border-gray-300 w-full"></span>
          <span className="mx-4 text-gray-500">OR</span>
          <span className="border-t border-gray-300 w-full"></span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div>
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                const data = jwtDecode(
                  credentialResponse.credential as string
                ) as CustomJwtPayload;
                console.log(data);

                await login(data.email);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              className="flex items-center justify-center w-10 h-10 border rounded-full"
              onClick={() => githubLogin()}
            >
              <img
                src="https://img.icons8.com/material-outlined/48/000000/github.png"
                alt="GitHub"
              />
            </button>
            <button
              className="flex items-center justify-center w-10 h-10 border rounded-full"
              onClick={() => twitchLogin()}
            >
              <img
                src="https://img.icons8.com/color/48/000000/twitch.png"
                alt="Twitch"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
