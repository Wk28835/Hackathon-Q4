import React, { useState, useEffect } from "react";

// Interfaces
interface Source {
  path: string;
  snippet: string;
  score: number;
}

interface ChatResponse {
  answer: string;
  sources: Source[];
}

// Send Button Icon (For inside the input box)
const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={20}
    height={20}
  >
    <path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.599 60.599 0 0 0 18.442-8.31.75.75 0 0 0 0-1.352 60.599 60.599 0 0 0-18.442-8.31Z" />
  </svg>
);

// New Chat Icon (For the small closed button - Replaces the Arrow)
// New RAG Icon (Thought bubble with document/sources inside)
const ChatIcon = () => (
    <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50%',
            width: '100%',
            minWidth: '20px', // Ensure min width for the icon circle
        }}
    >
        {/* 🔑 NEW: Floating Text/Label */}
        <span
            style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#10151C', // Dark text color
                backgroundColor: '#FFFFFF', // White background bubble
                padding: '2px 2px',
                borderRadius: '16px',
                marginRight: '1px', // Space between text and icon
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                whiteSpace: 'nowrap',
                transform: 'translateX(-50px)', // Adjust this based on your wrapper positioning if needed
            }}
        >
            Ask me any question
        </span>

        {/* 🔑 NEW: RAG Icon (Thought bubble with document icon inside) */}
    <svg
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
         style={{
            width: '50px',
            height: '50px',
            color: '#00F0FF' // Pure White
        }}>
        <path
            d="M1.5 8.67v8.582a1.5 1.5 0 0 0 1.5 1.5h18a1.5 1.5 0 0 0 1.5-1.5V8.67l-8.402 5.485a1.5 1.5 0 0 1-1.796 0L1.5 8.67ZM22.5 6.908V5.174a1.5 1.5 0 0 0-1.5-1.5h-18a1.5 1.5 0 0 0-1.5 1.5v1.734l10.236 6.697a1.5 1.5 0 0 0 1.764 0L22.5 6.908Z"
        />
    </svg>        
    </div>
);


// --- Custom Colors ---
const COLOR_ACCENT = "#00D0FF";
const COLOR_BACKGROUND = "#FFFFFF";
const COLOR_CARD_BG = "#F5F8FA";
const COLOR_TEXT_DARK = "#10151C";
const COLOR_ACCENT_TEXT = "#005F7A";
// ---

export default function RAGChatbot() {
  const [isOpen, setIsOpen] = useState(false); // 🔑 NEW: Toggle visibility state
  const [question, setQuestion] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const [useSelectedText, setUseSelectedText] = useState(false);
  const [response, setResponse] = useState<ChatResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

const RAG_API_URL = process.env.NEXT_PUBLIC_RAG_API_URL || "http://127.0.0.1:8000";

  // Detect selected text (Logic remains the same)
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection()?.toString();
      if (selection && selection.trim().length > 0) {
        setSelectedText(selection);
      } else {
        setSelectedText("");
        setUseSelectedText(false);
      }
    };
    document.addEventListener("selectionchange", handleSelection);
    return () => document.removeEventListener("selectionchange", handleSelection);
  }, []);

  // Handle Ask (Logic remains the same)
  const handleAsk = async () => {
    if (!question.trim() || loading) return;
    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      const res = await fetch(`${RAG_API_URL}/rag/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          only_selected: useSelectedText,
          user_id: "docusaurus_user",
          text: useSelectedText ? selectedText : "",
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.detail || `HTTP error! Status: ${res.status}`);
      }

      const data = (await res.json()) as ChatResponse;
      if (data.answer) setResponse(data);
      else throw new Error("Invalid response format from API.");
    } catch (e: any) {
      setError(`Failed to fetch answer: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setQuestion("");
    setResponse(null);
    setError(null);
    setUseSelectedText(false);
  };


  // ----------------------------------------------------
  // 🔑 PRIMARY CHANGE: Conditional Rendering
  // ----------------------------------------------------

  if (!isOpen) {
      // 🔑 Renders the small icon button when chat is closed
      // The surrounding div in LayoutWrapper provides the fixed position and circle background
      return (
          <div onClick={() => setIsOpen(true)} style={{ height: '100%', width: '100%' }}>
              <ChatIcon />
          </div>
      );
  }


  // ----------------------------------------------------
  // Renders the full chat UI when isOpen is TRUE
  // ----------------------------------------------------

  return (
    // Main Container: Now uses fixed positioning for the expanded state
    <div
      style={{
            // 🔑 Positioning to override the small button style from LayoutWrapper
            position: 'fixed',
            bottom: '40px', 
            right: '40px',
            width: '400px', // Compact width
            maxHeight: '80vh', 
            zIndex: 1001, // Ensure it sits above the button itself
            
            // Existing light theme styles
            backgroundColor: COLOR_BACKGROUND,
            borderTop: `4px solid ${COLOR_ACCENT}`,
            margin: 0, // Override auto margin
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
            overflowY: 'auto', // Add scroll for long chats
            fontFamily: "system-ui, sans-serif",
      }}
    >
        {/* 🔑 Close Button */}
        <button 
            onClick={() => setIsOpen(false)}
            style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                color: COLOR_ACCENT_TEXT,
                cursor: 'pointer',
                fontWeight: 700,
            }}
        >
            &times;
        </button>

      {/* Header */}
      <h2
        style={{
          color: COLOR_ACCENT_TEXT,
          fontSize: "20px", // Reduced size for compact window
          fontWeight: 800,
          marginBottom: "20px",
          textAlign: "center",
          borderBottom: "1px solid #ddd",
          paddingBottom: "10px",
        }}
      >
        🤖 RAG Assistant
      </h2>

      {/* Selected Text Info */}
      {selectedText && (
        <div
          style={{
            backgroundColor: COLOR_CARD_BG,
            color: COLOR_TEXT_DARK,
            borderLeft: `4px solid ${COLOR_ACCENT}`,
            marginBottom: "16px",
            padding: "12px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          <p style={{ fontSize: "13px" }}>
            Context Detected:{" "}
            <span style={{ fontWeight: 600 }}>
              {selectedText.slice(0, 150)}
              {selectedText.length > 150 ? "..." : ""}
            </span>
          </p>
          <label style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
            <input
              type="checkbox"
              checked={useSelectedText}
              onChange={(e) => setUseSelectedText(e.target.checked)}
              style={{ accentColor: COLOR_ACCENT, marginRight: "8px" }}
            />
            <span style={{ fontSize: "12px", opacity: 0.8 }}>
              Focus question on selected text only
            </span>
          </label>
        </div>
      )}

      {/* Input Box */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "2px",
          border: `1px solid ${COLOR_ACCENT_TEXT}`,
          backgroundColor: COLOR_CARD_BG,
          borderRadius: "8px",
          padding: "2px 2px", // Reduced padding
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        }}
      >
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) handleAsk();
          }}
          placeholder="Ask a question..." // Simplified placeholder
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: "14px", // Reduced font size
            color: COLOR_TEXT_DARK,
            caretColor: COLOR_ACCENT,
          }}
          disabled={loading}
        />
        <button
          onClick={handleClear}
          style={{
            marginRight: "6px", // Reduced margin
            padding: "4px 4px", // Reduced padding
            borderRadius: "4px", // Reduced border radius
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            fontSize: "12px", // Reduced font size
            cursor: "pointer",
          }}
        >
          Clear
        </button>
        <button
          onClick={handleAsk}
          disabled={loading || !question.trim()}
          style={{
            backgroundColor: loading || !question.trim() ? "#ccc" : COLOR_ACCENT,
            color: COLOR_TEXT_DARK,
            padding: "4px", // Reduced padding
            borderRadius: "4px", // Reduced border radius
            border: "none",
            cursor: loading || !question.trim() ? "not-allowed" : "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            transition: "transform 0.2s ease",
          }}
        >
          {loading ? (
            <div
                // Reduced size for spinner
              style={{
                border: "2px solid rgba(0,0,0,0.2)",
                borderTop: "2px solid #000",
                borderRadius: "50%",
                width: "14px",
                height: "14px",
                animation: "spin 1s linear infinite",
              }}
            />
          ) : (
            <SendIcon />
          )}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div
          style={{
            backgroundColor: "#FEE2E2",
            border: "1px solid #FCA5A5",
            color: "#B91C1C",
            padding: "4px",
            borderRadius: "4px",
            marginBottom: "16px",
            fontSize: '13px',
          }}
        >
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Response */}
      {response && (
        <div className="space-y-6" aria-live="polite">
          {/* Answer */}
          <div
            style={{ backgroundColor: COLOR_CARD_BG, borderColor: COLOR_ACCENT }}
            className="p-4 rounded-lg border-l-4 shadow-md prose max-w-none" // Reduced padding
          >
            <h3
              style={{ color: COLOR_ACCENT_TEXT }}
              className="text-lg font-bold mb-2" // Reduced font size
            >
              ✨ AI Response
            </h3>
            <p
              style={{ color: COLOR_TEXT_DARK }}
              className="leading-relaxed whitespace-pre-line text-sm" // Reduced font size
            >
              {response.answer}
            </p>
          </div>

          {/* Sources */}
          {response.sources && response.sources.length > 0 && (
            <div style={{ marginTop: "16px" }}> // Reduced margin
    <h4
      style={{
        color: COLOR_TEXT_DARK,
        fontSize: "16px", // Reduced font size
        fontWeight: 700,
        marginBottom: "8px",
        borderBottom: "1px solid #ccc",
        paddingBottom: "4px",
        opacity: 0.9,
      }}
    >
      📚 Retrieved Data ({response.sources.length})
    </h4>
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}> // Reduced gap
      {response.sources.map((s, i) => (
        <div
          key={`${s.path}-${i}`}
          style={{
            backgroundColor: COLOR_CARD_BG,
            borderLeft: `3px solid ${COLOR_ACCENT}`,
            padding: "10px", // Reduced padding
            borderRadius: "6px", // Reduced border radius
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            transition: "box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.05)")
          }
        >
          <p
            style={{
              fontSize: "13px", // Reduced font size
              fontWeight: 600,
              marginBottom: "4px",
              color: COLOR_ACCENT_TEXT,
            }}
          >
            Source {i + 1}: {s.path}{" "}
            <span
              style={{
                marginLeft: "8px",
                fontSize: "11px", // Reduced font size
                fontWeight: 500,
                color: "#6B7280",
              }}
            >
              (Score:{" "}
              {typeof s.score === "number" ? s.score.toFixed(4) : "N/A"})
            </span>
          </p>
          <blockquote
            style={{
              fontSize: "12px", // Reduced font size
              fontStyle: "italic",
              borderLeft: "4px solid #CBD5E0",
              paddingLeft: "8px",
              margin: 0,
              color: COLOR_TEXT_DARK,
              lineHeight: 1.5,
            }}
          >
            {s.snippet.length > 300
              ? s.snippet.slice(0, 300) + "..."
              : s.snippet}
          </blockquote>
        </div>
      ))}
    </div>
  </div>
          )}
        </div>
      )}

      {/* Empty state */}
     {!response && !error && (
  <div
    style={{
      backgroundColor: COLOR_CARD_BG,
      marginTop: "12px",
      padding: "12px",
      borderRadius: "8px",
      fontSize: "13px",
      color: "#555",
      textAlign: "center",
    }}
  >
    Ask a question to see the AI response and the retrieved sources here.
  </div>
)}
    </div>
  );
}