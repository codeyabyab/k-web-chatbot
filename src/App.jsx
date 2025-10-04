import FormSection from "./components/FormSection";
import AnswerSection from "./components/AnswerSection";

import { useState } from "react";

const App = () => {
  const [storedValues, setStoredValues] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
  console.log(apiKey);

  const generateResponse = async (newQuestion, setNewQuestion) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "HTTP-Referer": "https://www.sitename.com",
            "X-Title": "SiteName",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "deepseek/deepseek-r1:free",
            messages: [{ role: "user", content: newQuestion }],
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      const answer =
        data.choices?.[0]?.message?.content || "No response received.";

      setStoredValues([
        {
          question: newQuestion,
          answer,
        },
        ...storedValues,
      ]);
      setNewQuestion("");
    } catch (error) {
      console.error(error);
      setStoredValues([
        {
          question: newQuestion,
          answer: "Error: " + error.message,
        },
        ...storedValues,
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-poppins bg-[#1D1E20] text-[#DADADB]">
      <div className="max-w-[800px] py-6 mx-auto sm:max-w-full sm:px-5">
        <div className="mb-8 text-center">
          <h1 className="text-[2.7rem] font-bold">K Web Chatbot</h1>
          {storedValues.length < 1 && (
            <p className="text-base font-light mt-2">
              I am an automated question-and-answer system. Ask me anything and
              I’ll try to give you a reliable response.
            </p>
          )}
        </div>

        <FormSection generateResponse={generateResponse} />

        {loading && (
          <div className="flex justify-center items-center my-4 animate-pulse">
            <div className="w-6 h-6 border-4 border-sky-400 border-t-white rounded-full animate-spin" />
          </div>
        )}

        {!loading && storedValues.length > 0 && (
          <AnswerSection storedValues={storedValues} />
        )}
      </div>
    </div>
  );
};

export default App;
