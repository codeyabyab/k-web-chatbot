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
          <p className="bot-answer-text">
            {text}
          </p>
          <button
            type="button"
            onClick={copyText}
            aria-label={copied ? "Copied" : "Copy answer"}
            className="bot-answer-button"
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
