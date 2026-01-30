import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, ShieldCheck, Zap, Globe } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed. Please try again.");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } catch {
      setError("Unable to connect to server. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6 lg:p-8">
      
      {/* MAIN CONTAINER */}
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-[#0f1115] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 min-h-[600px]">
        
        {/* LEFT PANEL — Responsive: Hidden on small, flex on large */}
        <div className="hidden lg:flex flex-col justify-between w-1/2 p-12 xl:p-16 bg-[#0a0c10] relative overflow-hidden border-r border-teal-500/30 shadow-[inset_-1px_0_20px_rgba(20,184,166,0.15)]">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(20,184,166,0.1)_0%,transparent_50%)]" />
          
          <div className="relative z-10">
            <div className="text-teal-400 font-bold text-3xl tracking-tighter">UT</div>

            <h1 className="mt-12 text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight">
              U-Tech<br />Platform
            </h1>

            <p className="mt-6 text-slate-400 text-base xl:text-lg leading-relaxed max-w-sm">
              Secure access to high-performance projects and professional mentorships.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: <ShieldCheck size={20}/>, text: "Verified user accounts" },
                { icon: <Zap size={20}/>, text: "Real-time collaboration" },
                { icon: <Globe size={20}/>, text: "Global standards" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-2 bg-teal-500/10 rounded-lg text-teal-500">{item.icon}</div>
                  <span className="text-slate-300 text-sm xl:text-base font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 text-[10px] text-slate-600 uppercase tracking-[0.2em]">
            © 2026 U-Tech Systems Inc.
          </div>
        </div>

        {/* RIGHT PANEL — Responsive: Full width on mobile */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-16 flex flex-col justify-center relative bg-[#0f1115]">
          
          {/* MOBILE LOGO (Visible only on small screens) */}
          <div className="lg:hidden mb-8 text-teal-400 font-bold text-2xl tracking-tighter">UT</div>
          
          {/* THE GLOWING CARD EFFECT — Responsive: Adjusts padding for mobile */}
          <div className="absolute inset-4 sm:inset-6 lg:inset-12 border border-teal-500/20 rounded-3xl pointer-events-none shadow-[0_0_40px_rgba(20,184,166,0.03)]" />
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Create your account
            </h2>
            <p className="mt-2 text-teal-500/80 text-sm sm:text-base font-medium">
              Register to access the U-Tech system
            </p>

            {error && (
              <div className="mt-6 border border-red-500/40 bg-red-500/5 text-red-400 text-xs sm:text-sm px-4 py-3 rounded-xl flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                required
                onChange={handleChange}
                className="w-full bg-[#16191f] border border-white/5 rounded-xl px-5 py-3.5 sm:py-4 text-white placeholder:text-slate-600 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 outline-none transition-all text-sm sm:text-base"
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                onChange={handleChange}
                className="w-full bg-[#16191f] border border-white/5 rounded-xl px-5 py-3.5 sm:py-4 text-white placeholder:text-slate-600 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 outline-none transition-all text-sm sm:text-base"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  className="w-full bg-[#16191f] border border-white/5 rounded-xl px-5 py-3.5 sm:py-4 pr-14 text-white placeholder:text-slate-600 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 outline-none transition-all text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-teal-400 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-400 text-[#0a0c10] font-bold py-3.5 sm:py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] active:scale-[0.98] mt-4 text-sm sm:text-base"
              >
                Create account
              </button>
            </form>

            <p className="mt-8 text-slate-500 text-center text-xs sm:text-sm">
              Already registered?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-teal-500 font-semibold hover:text-teal-400 transition-colors ml-1"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;