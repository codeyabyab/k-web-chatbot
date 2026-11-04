import { useEffect, useRef, useState } from "react";

function FormSection({ generateResponse, onStop, disabled = false }) {
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
        <div className="form-border">
          <textarea
            ref={textareaRef}
            rows={1}
            aria-label="Your question"
            className="form-text-area"
            placeholder="Ask me about anything..."
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          {disabled ? (
            <button
              type="button"
              onClick={onStop}
              aria-label="Stop generating"
              title="Stop generating"
              className="button h-11 w-11 shrink-0 justify-center bg-sky-600 text-white hover:bg-sky-500 focus-visible:ring-sky-300 "
            >
              <span
                className="material-symbols-sharp text-[22px]"
                aria-hidden="true"
              >
                stop
              </span>
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              disabled={!canSubmit}
              aria-label="Send question"
              className="button h-11 w-11 shrink-0 justify-center bg-sky-600 text-white hover:bg-sky-500 focus-visible:ring-sky-300 disabled:bg-zinc-900 disabled:text-zinc-500"
            >
              <span
                className="material-symbols-sharp text-[22px]"
                aria-hidden="true"
              >
                arrow_upward
              </span>
            </button>
          )}
        </div>

        <p className="mt-2.5 mb-1.5 hidden text-center text-xs text-zinc-400 sm:block">
          Enter to send. Shift+Enter for a new line
        </p>
      </div>
    </>
  );
}

export default FormSection;
