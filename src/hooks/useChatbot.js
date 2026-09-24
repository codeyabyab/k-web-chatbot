import { useState } from "react";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = "deepseek/deepseek-r1:free";

export const useChatbot = () => {
  const [storedValues, setStoredValues] = useState([]);
  const [loading, setLoading] = useState(false);

  const apikey = import.meta.env.VITE_OPENROUTER_API_KEY;

  const generateResponse = async (newQuestion, setNewQuestion) => {
    setLoading(true);

    try {
      const response = await fetch(OPENROUTER_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": "https://k-web-chatbot.vercel.app",
          "X-Title": "K Web Chatbot",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [{ role: "user", content: newQuestion }],
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed ${response.status}`);
      }

      const data = await response.json();
      const answer = data.choices?.[0]?.message.content || "No response";

      setStoredValues((prev) => [{ question: newQuestion, answer }, ...prev]);
      setNewQuestion("");
    } catch (error) {
      setStoredValues((prev) => [
        { question: newQuestion, answer: "Error: " + error.message },
        ...prev,
      ]);
    } finally {
      setLoading(false);
    }
  };

  return { storedValues, loading, generateResponse };
};
