import React, { useState } from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function QAButton() {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

      const { siteConfig } = useDocusaurusContext();
      const RAG_API_URL = siteConfig.customFields.RAG_API_URL;

  const askQuestion = async () => {
    setLoading(true);
    setAnswer("");

    const res = await fetch(`${RAG_API_URL}/qa/answer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setAnswer(data.answer || data.error);
    setLoading(false);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question about this chapter..."
        style={{
          padding: "8px",
          width: "70%",
          marginRight: "8px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={askQuestion}
        disabled={loading}
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          background: "#007bff",
          color: "white",
        }}
      >
        {loading ? "Thinking..." : "Ask"}
      </button>

      {answer && (
        <div
          style={{
            marginTop: "1rem",
            padding: "12px",
            background: "#26AC8F",
            borderRadius: "8px",
          }}
        >
          <b>Answer:</b> {answer}
        </div>
      )}
    </div>
  );
}
