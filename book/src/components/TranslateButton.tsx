import React, { useState } from "react";

interface TranslateButtonProps {
  textToTranslate: string;
}

export default function TranslateButton({ textToTranslate }: TranslateButtonProps) {
  const [translatedText, setTranslatedText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  const RAG_API_URL = process.env.NEXT_PUBLIC_RAG_API_URL || "http://127.0.0.1:8000";
  const handleTranslate = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch(`${RAG_API_URL}/translate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: textToTranslate }),
      });

      const data = await res.json();
      setTranslatedText(data.translated_text); // make sure your API returns this field
      setShowTranslation(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-6">
      {/* Translate Button */}
      <button
        onClick={handleTranslate}
        className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow-md transition-colors"
      >
        {loading ? "Translating..." : "Translate to Urdu"}
      </button>

      {/* Original content always visible */}
      <div className="mt-4 prose max-w-none">
        {!showTranslation && textToTranslate}
      </div>

      {/* Translated content */}
      {showTranslation && translatedText && (
        <div className="mt-4 prose max-w-none text-right direction-rtl">
          {translatedText}
        </div>
      )}
    </div>
  );
}
