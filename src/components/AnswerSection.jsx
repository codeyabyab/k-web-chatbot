const AnswerSection = ({ storedValues }) => {
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <hr className="my-16 border border-[#343536]" />
      <div className="space-y-8">
        {storedValues.map((value, index) => {
          return (
            <div className="relative my-8" key={index}>
              <p className="bg-[#CA228C] p-5">{value.question}</p>

              <p className="bg-[#343536] p-5">{value.answer}</p>

              <div
                className="absolute bg-black w-[50px] h-[50px] rounded-md flex justify-center items-center -bottom-2.5 -right-2.5 text-lg cursor-pointer transition-all duration-500 hover:bg-[#CA228C]"
                onClick={() => copyText(value.answer)}
              >
                <i className="fa-solid fa-copy"></i>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AnswerSection;
