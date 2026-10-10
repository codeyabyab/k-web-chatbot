import { useEffect, useRef, useState } from "react";

function FormSection({ generateResponse, disabled = false }) {
  const [newQuestion, setNewQuestion] = useState("");
  const textareaRef = useRef(null);

  const canSubmit = newQuestion.trim().length > 0 && !disabled;

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }, [newQuestion]);

  const submit = () => {
    if (!canSubmit) return;
    generateResponse(newQuestion, setNewQuestion);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <>
      <div className="mt-5">
        <div className="flex items-end gap-2 rounded-xl bg-stone-700 p-2 transition-shadow duration-200 focus-within:ring-2 focus-within:ring-sky-500">
          <textarea
            ref={textareaRef}
            rows={1}
            aria-label="Your question"
            className="max-h-40 min-h-[44px] flex-1 resize-none bg-transparent px-3 py-2.5 text-base text-sky-50 outline-none placeholder:text-zinc-400"
            placeholder="Ask me about anything..."
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button
            type="button"
            onClick={submit}
            disabled={!canSubmit}
            aria-label="Send question"
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-sky-600 text-white transition-colors duration-200 hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 disabled:cursor-not-allowed disabled:bg-zinc-900 disabled:text-zinc-500"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>

        <p className="mt-2.5 hidden text-center text-xs text-zinc-400 sm:block">
          Enter to send. Shift+Enter for a new line
        </p>
      </div>
    </>
  );
}

export default FormSection;
