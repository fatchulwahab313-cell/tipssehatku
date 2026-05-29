"use client";

import { useState } from "react";

export default function BmiCalculator() {
  const [bb, setBb] = useState("");
  const [tb, setTb] = useState("");
  const [result, setResult] = useState<{ bmi: number; status: string; emoji: string; ok: boolean } | null>(null);
  const [error, setError] = useState("");

  const calc = () => {
    const weight = parseFloat(bb);
    const height = parseFloat(tb);
    if (!weight || !height || weight <= 0 || height <= 0) {
      setError("⚠️ Masukkan berat dan tinggi yang valid");
      setResult(null);
      return;
    }
    setError("");
    const bmi = weight / Math.pow(height / 100, 2);
    let status = "";
    let emoji = "";
    if (bmi < 18.5) { status = "Kurus (Underweight)"; emoji = "⚠️"; }
    else if (bmi < 25) { status = "Normal (Ideal)"; emoji = "✅"; }
    else if (bmi < 30) { status = "Gemuk (Overweight)"; emoji = "⚠️"; }
    else { status = "Obesitas"; emoji = "🔴"; }
    setResult({ bmi, status, emoji, ok: bmi >= 18.5 && bmi < 25 });
  };

  const inputStyle = {
    flex: 1, padding: "8px 12px", border: "1.5px solid var(--border)",
    borderRadius: "var(--radius-sm)", fontSize: "0.82rem", fontFamily: "inherit",
    outline: "none", transition: "border-color .2s", background: "white", color: "var(--dark)",
  };

  return (
    <div>
      <h4 style={{ fontSize: "0.85rem", fontWeight: 700, marginBottom: 10, color: "var(--dark)" }}>
        ⚖️ Kalkulator BMI
      </h4>
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <input
          style={inputStyle}
          type="number"
          placeholder="Berat (kg)"
          min="1" max="300"
          value={bb}
          onChange={e => setBb(e.target.value)}
          onFocus={e => (e.target.style.borderColor = "var(--green)")}
          onBlur={e => (e.target.style.borderColor = "var(--border)")}
        />
        <input
          style={inputStyle}
          type="number"
          placeholder="Tinggi (cm)"
          min="1" max="300"
          value={tb}
          onChange={e => setTb(e.target.value)}
          onFocus={e => (e.target.style.borderColor = "var(--green)")}
          onBlur={e => (e.target.style.borderColor = "var(--border)")}
        />
      </div>
      <button
        onClick={calc}
        style={{ width: "100%", background: "var(--green)", color: "white", border: "none", padding: "8px 14px", borderRadius: "var(--radius-sm)", fontSize: "0.85rem", fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
        Hitung BMI
      </button>
      {error && (
        <div style={{ marginTop: 8, background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "var(--radius-sm)", padding: 10, textAlign: "center", fontSize: "0.83rem", color: "#c2410c" }}>
          {error}
        </div>
      )}
      {result && (
        <div style={{
          marginTop: 8,
          background: result.ok ? "var(--green-pale)" : "#fff7ed",
          border: `1px solid ${result.ok ? "var(--green-mint)" : "#fed7aa"}`,
          borderRadius: "var(--radius-sm)",
          padding: 10,
          textAlign: "center",
          fontSize: "0.85rem",
          fontWeight: 700,
          color: result.ok ? "var(--green-dark)" : "#c2410c",
        }}>
          {result.emoji} BMI: <strong>{result.bmi.toFixed(1)}</strong> — {result.status}
        </div>
      )}
    </div>
  );
}
