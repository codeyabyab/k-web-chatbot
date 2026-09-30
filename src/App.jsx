import { useChatbot } from "./hooks/useChatbot";

import FormSection from "./components/FormSection";
import AnswerSection from "./components/AnswerSection";
import Loader from "./components/misc/Loader"


function App() {
  const { storedValues, loading, generateResponse } = useChatbot();

  return (
    <>
      <div className="min-h-screen bg-[#1d1e20] text-[#dadadb]">
        <div className="max-w-[800px] py-6 mx-auto sm:max-w-full sm:px-5">
          <div className="mb-8 text-center">
            <h1 className="text-[2.7rem] font-bold">K Web Chatbot</h1>
            {storedValues.length < 1 && (
              <p className="text-base font-light mt-2">
                I am an automated question-and-answer system. Ask and I'll try
                to give you a reliable response
              </p>
            )}
          </div>

          <FormSection generateResponse={generateResponse} />

          {loading && <Loader/>}

          {!loading && storedValues.length > 0 && (
            <AnswerSection storedValues={storedValues}/>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
