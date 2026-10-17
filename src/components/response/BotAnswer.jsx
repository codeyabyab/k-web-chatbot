import { useState } from "react";

function BotAnswer({ text }) {
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeoutt(() => setCopiedIndex(null), 1500);
    } catch {}
  };

  return (
    <>
      <div className="group flex justify-start">
        <div className="max-w-[85%]">
          <p className="whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-stone-700 px-4 py-3 text-sky-50">
            {text}
          </p>
          <button
            type="button"
            onClick={copyText}
            aria-label={copied ? "Copied" : "Copy answer"}
            className="mt-1 flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 text-xs text-zinc-400 transition-colors duration-200 hover:bg-zinc-700 hover:text-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            <span
              className="material-symbols-sharp text-[16px]"
              aria-hidden="true"
            >
              {copied ? "check" : "content_copy"}
            </span>
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </>
  );
}

export default BotAnswer;
