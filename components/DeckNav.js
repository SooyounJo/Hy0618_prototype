import { useEffect, useState } from "react";
import { CHAPTERS } from "@/utils/chapters";

export default function DeckNav({ deckRef }) {
  const [activeCh, setActiveCh] = useState("1");

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return undefined;

    const onUpdate = (event) => {
      const chapter = event.detail?.ch;
      if (chapter) setActiveCh(String(chapter));
    };

    deck.addEventListener("deck:update", onUpdate);
    return () => deck.removeEventListener("deck:update", onUpdate);
  }, [deckRef]);

  const jump = (chapter) => {
    const deck = deckRef.current;
    if (!deck) return;
    const slides = [...deck.querySelectorAll(".slide")];
    const firstOf = {};
    slides.forEach((slide, index) => {
      const ch = slide.dataset.ch;
      if (firstOf[ch] === undefined) firstOf[ch] = index;
    });
    if (firstOf[chapter.ch] !== undefined) {
      slides[firstOf[chapter.ch]].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="deck-nav" aria-label="섹션 이동">
      <div className="deck-nav__track">
        {CHAPTERS.map((chapter) => {
          const isActive = chapter.ch === activeCh;
          return (
            <div key={chapter.ch} className={`deck-nav__row${isActive ? " active" : ""}`}>
              <button
                type="button"
                className={`deck-nav__item${isActive ? " active" : ""}`}
                onClick={() => jump(chapter)}
                aria-current={isActive ? "true" : undefined}
              >
                {isActive ? (
                  <span className="deck-nav__pill">{chapter.n}</span>
                ) : (
                  <span className="deck-nav__dot" />
                )}
              </button>
              {isActive && <span className="deck-nav__label">{chapter.l}</span>}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
