import { useEffect, useRef } from "react";

import FormSection from "./components/FormSection";
import ResponseSection from "./components/ResponseSection";
import Loader from "./components/misc/Loader";

import { useChatbot } from "./hooks/useChatbot";

function App() {
  const { storedValues, loading, generateResponse, clearChat } = useChatbot();
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [storedValues, loading]);

  const isEmpty = storedValues.length < 1 && !loading;

  return (
    <>
      <div className="flex h-dvh flex-col bg-zinc-800 text-zinc-300">
        <header className="relative border-b border-zinc-700 px-5 py-3 text-center">
          <h1 className="text-xl font-bold tracking-wide text-sky-500">K Web Chatbot</h1>

          <button
          type="button"
          onClick={clearChat}
          disabled={isEmpty || loading}
          aria-label="Start a new chat"
          title="New chat"
          className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-sky-500 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-zinc-400"
          >
            <span className="material-symbols-sharp text-[20px]" aria-hidden="true">edit_square</span>
            <span className="hidden sm:inline">New chat</span>

          </button>
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

        <footer className="border-t border-zinc-700 px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2">
          <div className="mx-auto max-w-[800px]">
            <FormSection generateResponse={generateResponse} disabled={loading}/>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
