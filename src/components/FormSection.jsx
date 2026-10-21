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

          <button
            type="button"
            onClick={submit}
            disabled={!canSubmit}
            aria-label="Send question"
            className="form-button"
          >
            <span className="material-symbols-sharp text-[22px]" aria-hidden="true">arrow_upward</span>
          </button>
        </div>

        <p className="mt-2.5 mb-1.5 hidden text-center text-xs text-zinc-400 sm:block">
          Enter to send. Shift+Enter for a new line
        </p>
      </div>
    </>
  );
}

export default FormSection;
