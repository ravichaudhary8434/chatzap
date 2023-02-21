import EmojiPicker from "emoji-picker-react";
import { useState, useEffect, useRef } from "react";
import { DivElement } from "../Reusable";

const EmojiSelector = ({ onSelectEmoji }) => {
  const [showPicker, setShowPicker] = useState(false);
  const emojiPickerRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line
  }, []);

  const handleClickOutside = (event) => {
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(event.target)
    ) {
      setShowPicker(false);
    }
  };

  return (
    <DivElement
      position="relative"
      ref={emojiPickerRef}
      onClick={() => setShowPicker(true)}
    >
      <i className="fa-regular fa-face-smile"></i>
      {showPicker && (
        <DivElement position="absolute" bottom="40px" left="-16px">
          <EmojiPicker
            theme="dark"
            onEmojiClick={(e) => onSelectEmoji(e.emoji)}
          />
        </DivElement>
      )}
    </DivElement>
  );
};

export default EmojiSelector;
