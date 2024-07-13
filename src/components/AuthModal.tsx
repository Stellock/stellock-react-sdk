const AuthModal = () => {
  return (
    <div className="bg-red-500">
      <div>
        <div className="bg-slate-600">
          <button>Google</button>
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
