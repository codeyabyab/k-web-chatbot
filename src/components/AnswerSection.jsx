import { useState } from "react";

function AnswerSection({ storedValues }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyText = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeoutt(() => setCopiedIndex(null), 1500);
    } catch {}
  };

  return (
    <>
      <div className="space-y-6">
        {/* User question */}
        {storedValues.map((value, index) => (
          <div className="group flex justify-end">
            <div className="max-w-[85%]">
              <p className="whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-stone-700 px-4 py-3 text-slate-900">
                {value.question}
              </p>
            </div>

            {/* Bot answer */}
          </div>
        ))}
      </div>
    </>
  );
}

export default AnswerSection;
