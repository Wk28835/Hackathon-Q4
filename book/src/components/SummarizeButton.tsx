import React, { useState } from "react";

export default function SummarizeButton() {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const RAG_API_URL = process.env.NEXT_PUBLIC_RAG_API_URL || "http://127.0.0.1:8000";

  // Extract chapter text (Docusaurus renders content inside #__docusaurus)
  const extractPageText = () => {
    const root = document.getElementById("__docusaurus");
    return root?.innerText || "";
  };

  const handleSummarize = async () => {
    setLoading(true);
    setSummary(null);
    setError(null);

    const chapterText = extractPageText();

    try {
      const res = await fetch(`${RAG_API_URL}/summarizer/summarize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: chapterText }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "API error");
      }

      const data = await res.json();
      setSummary(data.summary);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <button
        onClick={handleSummarize}
        disabled={loading}
        style={{
          padding: "10px 18px",
          fontSize: "16px",
          background: "#00F0FF",
          color: "black",
          borderRadius: "8px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Summarizing..." : "Summarize This Chapter"}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          Error: {error}
        </p>
      )}

      {summary && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            background: "#26AC8F",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ marginBottom: "0.5rem", color: "#FAFAFA" }}>
            Summary
          </h3>
          <p  style={{ whiteSpace: "pre-line" }}>{summary}</p>
        </div>
      )}
    </div>
  );
}
