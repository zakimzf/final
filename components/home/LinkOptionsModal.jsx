import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { downloadQRCodeState } from "../../atoms/downloadQRCodeState";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";
import { Backdrop } from "../Backdrop";
import React from "react";
import { BASE_URL } from "../../utils/config";

const LinkOptionsModal = ({
  customSlug,
  setCustomSlug,
  setLinkSettingsOpen,
  linkSettingsOpen,
}) => {
  const [downloadQRCode, setDownloadQRCode] =
    useRecoilState(downloadQRCodeState);

  return (
    <Backdrop
      onClickHandler={() => {
        setLinkSettingsOpen(false);
      }}
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        exit={{ y: -50 }}
        className="relative flex flex-col w-96 items-center justify-start rounded-xl bg-black ring-8 ring-slate-200/70 dark:bg-white dark:ring-stone-700/70"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="animate close-button absolute top-2 right-2 text-2xl"
          onClick={() => {
            setLinkSettingsOpen(false);
          }}
        >
          <AiFillCloseCircle />
        </button>
        <h4 className="mt-5 text-2xl font-semibold text-white dark:text-black">
          Link Options
        </h4>
        <div className="mt-2 flex h-full w-full flex-col items-center justify-center space-y-5 p-5">
          <p className="w-52 truncate text-white dark:text-black">
            {customSlug.length < 1
              ? BASE_URL + "example"
              : BASE_URL}
            <span className="text-green-500">{customSlug.toLowerCase()}</span>
          </p>
          <input
            type="text"
            className="text-input"
            placeholder="Custom Link"
            value={customSlug}
            onChange={(e) => setCustomSlug(e.target.value.toLowerCase())}
          />
          <div className="flex flex-row flex-wrap items-center space-x-2">
            <p className="text-md text-white dark:text-black">
              Download QR Code?
            </p>
            <button onClick={() => setDownloadQRCode(!downloadQRCode)}>
              <AiFillCheckCircle
                className={`${
                  downloadQRCode
                    ? "text-cyan-300 dark:text-black"
                    : "text-slate-300 dark:text-green-500"
                } animate text-2xl`}
              />
            </button>
          </div>
          <button
            className="submit-button"
            onClick={() => setLinkSettingsOpen(false)}
          >
            Save 💾
          </button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default LinkOptionsModal;
