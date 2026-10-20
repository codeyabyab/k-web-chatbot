function UserQuestion({ text }) {
  return (
    <>
      <div className="flex justify-end">
        <p className="user-question-text">
          {text}
        </p>
      </div>
    </>
  );
}

export default UserQuestion;
