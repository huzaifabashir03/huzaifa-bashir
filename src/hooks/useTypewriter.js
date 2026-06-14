import { useState, useEffect } from "react";

const useTypewriter = (texts, speed = 100, pauseDuration = 2000) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const text = texts[textIndex];
    let timer;

    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timer);
    }

    if (!isDeleting) {
      if (currentIndex < text.length) {
        timer = setTimeout(() => {
          setCurrentText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
      } else {
        setIsPaused(true);
      }
    } else {
      if (currentIndex > 0) {
        timer = setTimeout(() => {
          setCurrentText(text.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [
    currentIndex,
    isDeleting,
    textIndex,
    isPaused,
    texts,
    speed,
    pauseDuration,
  ]);

  return currentText;
};

export default useTypewriter;
