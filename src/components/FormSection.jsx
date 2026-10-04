import { useState } from "react";

function FormSection({ generateResponse }) {
  const [newQuestion, setNewQuestion] = useState("");

  return (
    <>
      <div className="my-8">
        <textarea
          rows="5"
          className="w-full rounded-md border-0 p-5 text-base outline-none bg-stone-700 text-sky-50 transition-all duration-200 focus:border-l-[5px] focus:border-t-[5px] focus:border-sky-500 mb-5"
          placeholder="Ask me about anything..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        ></textarea>
        <button
          className="w-full rounded-md bg-zinc-900 text-sky-50 py-5 text-lg font-medium cursor-pointer transition-all duration-200 hover:border-t-[5px] hover:border-l-[5px] hover:border-sky-500"
          onClick={() => generateResponse(newQuestion, setNewQuestion)}
        >
          Submit Query
        </button>
      </div>
    </>
  );
}

export default FormSection;
