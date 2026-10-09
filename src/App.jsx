import { useChatbot } from "./hooks/useChatbot";

import FormSection from "./components/FormSection";
import AnswerSection from "./components/AnswerSection";
import Loader from "./components/misc/Loader";
import { useEffect, useRef } from "react";

function App() {
  const { storedValues, loading, generateResponse } = useChatbot();
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [storedValues, loading]);

  const isEmpty = storedValues.length < 1 && !loading;

  return (
    <>
      <div className="flex h-dvh flex-col bg-zinc-800 text-zinc-300">
        <header className="border-b border-zinc-700 px-5 py-3 text-center">
          <h1 className="text-xl font-bold tracking-wide text-sky-500">K Web Chatbot</h1>
        </header>

        <main className="flex-1 overflow-y-auto" aria-live="polite">
          <div className="mx-auto w-full max-w-[800px] px-5 py-6">
            {isEmpty ? (
              <div className="py-16 text-center">
                <h2 className="text-3xl font-bold italic">
                  What can I help with?
                </h2>
                <p className="mt-2 text-base font-light text-zinc-400">
                  I am an automated question-and-answer system. Ask and I'll try
                  to give you a reliable response
                </p>
              </div>
            ) : (
              <AnswerSection storedValues={storedValues} />
            )}

            {loading && <Loader />}
            <div ref={bottomRef} />
          </div>
        </main>

        <footer className="border-t border-zinc-700 px-5 pb-[max(1rem,env(safe-are-inset-bottom)) pt-3]">
          <div className="mx-auto max-w-[800px]">
            <FormSection generateResponse={generateResponse} disabled={loading}/>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
