'use client';
import { useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  async function ping() {
    setError("");
    try {
      const res = await fetch("/api/health/");
      const data = await res.json();
      setMsg(JSON.stringify(data));
    } catch (e:any) {
      setError(e?.message || "Ping failed");
    }
  }

  async function calc() {
    setError("");
    try {
      const payload = [{ facility_id: "A", kwh: 1200, emission_factor_kg_per_kwh: 0.4 }];
      const res = await fetch("/api/emissions/scope2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      setResult(JSON.stringify(data));
    } catch (e:any) {
      setError(e?.message || "Calc failed");
    }
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Sustainability AI Dashboard</h1>
      <p className="mt-2">Real-time emissions, forecasts, and optimization tips.</p>

      <div style={{marginTop: 16, display: "flex", gap: 12}}>
        <button onClick={ping} style={{padding: 8, border: "1px solid #ddd", borderRadius: 8}}>
          Ping API
        </button>
        <button onClick={calc} style={{padding: 8, border: "1px solid #ddd", borderRadius: 8}}>
          Calculate Scope 2
        </button>
      </div>

      {error && <pre style={{marginTop: 16, color: 'red'}}>Error: {error}</pre>}
      {msg && <pre style={{marginTop: 16}}>Health: {msg}</pre>}
      {result && <pre style={{marginTop: 16}}>Calc: {result}</pre>}
    </main>
  );
}
