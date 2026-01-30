import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import ClientLayout from "./layouts/ClientLayout";

// Pages (Dashboard)
import Overview from "./pages/Overview";
import Tutorials from "./pages/Tutorials";
import Projects from "./pages/Projects";
import Messages from "./pages/Messages";

// Auth Pages
import Login from "./pages/login";
import Register from "./pages/registration";

// Simple auth guard
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PROTECTED CLIENT DASHBOARD */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ClientLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="projects" element={<Projects />} />
          <Route path="messages" element={<Messages />} />
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
