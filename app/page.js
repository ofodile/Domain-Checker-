"use client";

import { useState } from "react";

export default function Home() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkDomain = async () => {
    if (!domain) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(`/api/domain-app?domain=${domain}`);
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ error: "Something went wrong" });
    }

    setLoading(false);
  };

  console.log(result)

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1 className="title">Free Domain Checker</h1>
      <p className="text">Enter the domain name below to check if the domain is available for puchase</p>

      <input
        type="text"
        placeholder="Enter domain (example.com)"
        className="input"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        style={{ width: "100%", padding: 10, borderRadius: 8 }}
      />

      <button
        onClick={checkDomain}
        className="btn"
      >
        {loading ? "Checking..." : "Check Domain"}
      </button>

      {result && (
        <div style={{ marginTop: 20 }}>
          {result.error && <p>{result.error}</p>}

          {result.available && (
          <div className="con">
            <p className="available" style={{ color: "red" }}>Domain Not Available </p> 
            <p className="reg">Registrar On {result.whois.registrar}</p>
          </div>
          )}

          {result.available === false && (
            <p className="available" style={{ color: "green" }}>✅ Domain is available </p>
          )}
        </div>
      )}
      <p className="paragraph">
        Want to start a website, launch a brand, or secure your online identity? Our free Domain Checker Tool makes it easy. Just type your desired domain name, and our system will instantly tell you if it’s available, taken, or premium. No delays, no confusion, fast and accurate results in seconds.</p>
    </div>
  );
}
