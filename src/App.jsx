import { useEffect, useRef } from "react";

import FormSection from "./components/FormSection";
import ResponseSection from "./components/ResponseSection";
import Loader from "./components/misc/Loader";

import { useChatbot } from "./hooks/useChatbot";

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
                  What can I help you with?
                </h2>
                <div className="mt-4 mb-4 max-w h-1 bg-sky-500 rounded-full"></div>
                <p className="mt-2 text-base font-light text-zinc-400">
                  I am an automated question and answer system using DeepSeek R1 as my model from OpenRouter. Ask and I'll give you a reliable response to the best of my abilities. 
                </p>
              </div>
            ) : (
              <ResponseSection storedValues={storedValues} />
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
