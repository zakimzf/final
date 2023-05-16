import { useState } from "react";
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillGearFill,
  BsFillLockFill,
  BsFillUnlockFill,
} from "react-icons/bs";

const Form = ({
  locked,
  setLocked,
  password,
  setPassword,
  magnetLink,
  setMagnetLink,
  handleSubmit,
  setLinkSettingsOpen,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col items-center justify-center "
    >
      <div className="flex flex-col color-white items-center justify-center w-full gap-y-8 px-6 py-6">
        {/* LINK INPUT */}
        <input
          type="text"
          className="text-input "
          value={magnetLink}
          onChange={(e) => setMagnetLink(e.target.value)}
          placeholder="Enter your link"
          id="no-swipe"
        />

        {/* LOCK & CONFIG BUTTONS */}
   
        <div className="flex flex-row items-center justify-between space-x-4 ">
    
        <input type="submit" className="submit-button dark:bg-white bg-black hover:border-1 text-white dark:text-black" value="Shorten Link 🔥" />
    
     
          {locked ? (
            <button
              type="button"
              onClick={() => setLocked(!locked)}
              className="animate z-10 cursor-pointer text-3xl text-black hover:scale-110 dark:text-white"
            >
              <BsFillLockFill />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setLocked(!locked)}
              className="animate z-10 cursor-pointer text-3xl text-black hover:scale-110 dark:text-white"
            >
              <BsFillUnlockFill />
            </button>
          )}

          {/* LINK SETTINGS BUTTON */}
          <button
            type="button"
            className="animate z-10 cursor-pointer object-cover text-3xl text-black hover:rotate-45 dark:text-white"
            onClick={() => setLinkSettingsOpen(true)}
          >
            <BsFillGearFill />
          </button>
        </div>

        {/* PASSWORD INPUT */}
        <div
          className={`${
            !locked
              ? "animate h-0 -translate-y-7 opacity-0"
              : "animate h-20 translate-y-0 opacity-100"
          } relative flex w-full items-center justify-center`}
        >
          
          <input
            type={showPassword ? "text" : "password"}
            className="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            disabled={!locked}
            id="no-swipe"
          />
          {showPassword ? (
            <BsFillEyeFill
              className="absolute right-3 cursor-pointer text-xl text-white dark:text-white"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
          ) : (
            <BsFillEyeSlashFill
              className="absolute right-3 cursor-pointer text-xl text-black dark:text-white"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
          )}
        </div>
      </div>

      {/* LIGHT IT UP BUTTON */}
     
    </form>
  );
};

export default Form;
