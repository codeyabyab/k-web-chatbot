function UserQuestion({ text }) {
  return (
    <>
      <div className="flex justify-end">
        <p className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-sm bg-stone-700 px-4 py-3 text-slate-900">
          {text}
        </p>
      </div>
    </>
  );
}

export default UserQuestion;
