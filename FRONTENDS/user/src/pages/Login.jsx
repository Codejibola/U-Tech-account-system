import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Save auth info
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/"); 
    } catch (err) {
      setError("Server error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-teal-400">
          Client Login
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Access your U-Tech account
        </p>

        {error && (
          <p className="mt-4 text-sm text-red-400">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full bg-black border border-slate-700 rounded-md px-4 py-3 text-slate-200 focus:border-teal-500 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full bg-black border border-slate-700 rounded-md px-4 py-3 text-slate-200 focus:border-teal-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-black font-medium py-3 rounded-md transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-400">
          No account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-teal-400 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
