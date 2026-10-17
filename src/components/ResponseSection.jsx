import BotAnswer from "./response/BotAnswer";
import UserQuestion from "./response/UserQuestion";

function ResponseSection({ storedValues }) {
  return (
    <>
      <div className="space-y-6">
        {storedValues.map((value, index) => (
          <div key={index} className="space-y-3">
            {/* User question */}
            <UserQuestion text={value.question} />
            {/* Bot answer */}
            <BotAnswer text={value.answer} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ResponseSection;
