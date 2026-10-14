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
          <div key={index} className="space-y-3">
          <div className="flex justify-end">
              <p className=" max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-stone-700 px-4 py-3 text-slate-900">
                {value.question}
              </p>
            </div>

            {/* Bot answer */}
            <div className="group flex justify-start">
              <div className="max-w-[85%]">
                <p className="whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-stone-700 px-4 py-3 text-sky-50">
                  {value.answer}
                </p>
                <button
                  type="button"
                  onClick={() => copyText(value.answer, index)}
                  aria-label={copiedIndex === index ? "Copied" : "Copy answer"}
                  className="mt-1 flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 text-xs text-zinc-400 transition-colors duration-200 hover:bg-zinc-700 hover:text-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  <span
                    className="material-symbols-sharp text-[16px]"
                    aria-hidden="true"
                  >
                    {copiedIndex === index ? "check" : "content_copy"}
                  </span>
                  {copiedIndex === index ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AnswerSection;
