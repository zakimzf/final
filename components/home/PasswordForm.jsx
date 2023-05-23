const Form = ({ password, setPassword, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-auto mb-auto flex flex-col items-center justify-center md:h-full"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="animate text-center text-sm text-black hover:text-slate-500 dark:text-white dark:hover:text-stone-400 xs:text-base">
          This link is password protected
        </p>
        {/* PASSWORD INPUT */}
        <input
          type="text"
          className="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      {/* PASSWORD UNLOCK BUTTON */}
      <input type="submit" className="submit-button" value="Unlock 🔓" />
    </form>
  );
};

export default Form;
