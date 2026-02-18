import { useState } from "react";

const FormSection = ({ generateResponse }) => {
  const [newQuestion, setNewQuestion] = useState("");

  return (
    <>
      <div className="my-8">
        <textarea
          rows="5"
          className="w-full rounded-md border-none p-5 text-base font-poppins outline-none bg-[#343536] text-[#DADADB] transition-all duration-500 focus:border-l-[5px] focus:border-t-[5px] focus:border-sky-400 focus:rounded-tl-none focus:rounded-tr-none focus:rounded-bl-none mb-5"
          placeholder="Ask me anything..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        ></textarea>
        <button
          className="w-full rounded-md bg-black text-[#DADADB] py-5 text-lg font-medium cursor-pointer transition-all duration-500 hover:border-l-[5px] hover:border-t-[5px] hover:border-sky-400 hover:rounded-tl-none hover:rounded-tr-none hover:rounded-bl-none"
          onClick={() => generateResponse(newQuestion, setNewQuestion)}
        >
          Generate Response 🤖
        </button>
      </div>
    </>
  );
};

export default FormSection;
