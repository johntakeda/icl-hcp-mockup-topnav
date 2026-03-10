import { useState, useEffect } from "react";

const STORAGE_KEY = "hcp-demo-auth";
const PASSWORD = "ICL!26hcp";
const ACCESS_TOKEN = "ICL26";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("access") === ACCESS_TOKEN) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
      return;
    }
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  if (authenticated) return <>{children}</>;

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#f5f5f5]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm flex flex-col gap-4"
      >
        <h1 className="text-xl font-semibold text-center text-[#030213]">
          MOCKUP: HCP FY26 Website
        </h1>
        <p className="text-sm text-center text-[#717182]">
          Enter the password to continue
        </p>
        <input
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          autoFocus
          className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
        />
        {error && (
          <p className="text-sm text-red-600 text-center">
            Incorrect password
          </p>
        )}
        <button
          type="submit"
          className="bg-[#030213] text-white rounded-lg px-4 py-2 text-base font-medium hover:bg-[#1a1a2e] transition-colors"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
