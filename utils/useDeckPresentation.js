import { useEffect } from "react";

const LOOP_STAGES = [
  {
    g: "STAGE 01 · GENERATE",
    lead: "더 많은 가능성을 만든다.",
    t: "생성 — AI가 더 이른 시점에, 더 많은 옵션을",
    d: "AI는 탐색과 압축의 엔진입니다. 콘크리트를 붓기 전에 수백 개의 방향을 빠르게 펼칩니다. 디자이너는 손이 아니라 <b>의도로 탐색의 폭</b>을 엽니다.",
    a: "자산 · <b>Key Image · Line-up Overview (AI Design Agent)</b>"
  },
  {
    g: "STAGE 02 · SELECT",
    lead: "디자이너가 방향을 고른다.",
    t: "선택 — 지휘자의 판단이 방향을 정한다",
    d: "방대한 선택지를 <b>브랜드 의도로 필터링</b>합니다. 핵심은 만드는 것이 아니라 고르는 것. 음악을 모르는 사람은 지휘할 수 없습니다.",
    a: "자산 · <b>Intent Package · 선택의 근거 기록</b>"
  },
  {
    g: "STAGE 03 · VALIDATE",
    lead: "시장·품평·실차·데이터로 검증한다.",
    t: "검증 — 가장 이른 단계에서 함께 합의한다",
    d: "크로스티켓과 워룸에서 엔지니어링·구매·품질의 제약이 <b>초기 탐색의 입력값</b>으로 들어옵니다. 디지털 품평으로 물리 시편을 기다리지 않습니다.",
    a: "자산 · <b>War Room 합의 · 디지털 품평 데이터</b>"
  },
  {
    g: "STAGE 04 · ASSETIZE",
    lead: "판단과 결과를 브랜드 자산으로 남긴다.",
    t: "자산화 — 판단이 사멸하지 않고 축적된다",
    d: "머릿속에 갇혀 사라지던 판단이 <b>기록되어 브랜드 판단 체계</b>로 쌓입니다. 그리고 이 자산이 다음 ‘생성’을 더 좋게 만듭니다.",
    a: "자산 · <b>Action Log · 브랜드 판단 체계 학습</b>"
  }
];

export function useDeckPresentation(deckRef) {
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return undefined;

    const slides = [...deck.querySelectorAll(".slide")];
    const counter = document.querySelector("#counter b");
    const total = document.getElementById("total");
    const bar = document.querySelector("#progress i");
    const hint = document.getElementById("hint");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (total) {
      total.textContent = String(slides.length).padStart(2, "0");
    }

    let cur = 0;
    const cleanups = [];

    const firstOf = {};
    slides.forEach((slide, index) => {
      const chapter = slide.dataset.ch;
      if (firstOf[chapter] === undefined) firstOf[chapter] = index;
    });

    const notifyDeck = (chapter, index) => {
      deck.dispatchEvent(
        new CustomEvent("deck:update", {
          detail: { ch: chapter, index }
        })
      );
    };

    const startCounts = (slide) => {
      slide.querySelectorAll("[data-count]").forEach((el) => {
        if (el.dataset.running) return;
        el.dataset.running = "1";
        const target = parseFloat(el.dataset.count);
        const dur = parseInt(el.dataset.dur || "1500", 10);
        const sfxEl = el.querySelector("i");
        const sfx = sfxEl ? sfxEl.outerHTML : "";
        const dec = String(el.dataset.count).includes(".") ? 1 : 0;
        const wrap = el.closest(".rv");
        const delay = wrap ? parseInt(wrap.style.getPropertyValue("--rd") || "0", 10) : 0;

        if (reduced) {
          el.innerHTML = `${target.toFixed(dec)}${sfx}`;
          return;
        }

        el._t = window.setTimeout(() => {
          const t0 = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - t0) / dur);
            const eased = 1 - (1 - p) ** 3;
            el.innerHTML = `${(target * eased).toFixed(dec)}${sfx}`;
            if (p < 1) el._raf = requestAnimationFrame(tick);
          };
          tick(t0);
        }, delay + 150);
      });
    };

    const resetCounts = (slide) => {
      slide.querySelectorAll("[data-count]").forEach((el) => {
        clearTimeout(el._t);
        cancelAnimationFrame(el._raf);
        delete el.dataset.running;
        const sfxEl = el.querySelector("i");
        el.innerHTML = `0${sfxEl ? sfxEl.outerHTML : ""}`;
      });
    };

    const go = (index) => {
      const next = Math.max(0, Math.min(slides.length - 1, index));
      slides[next].scrollIntoView({ behavior: "smooth" });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.5) {
            entry.target.classList.add("on");
            startCounts(entry.target);
            cur = slides.indexOf(entry.target);
            if (counter) counter.textContent = String(cur + 1).padStart(2, "0");
            const isDark = entry.target.classList.contains("dark");
            const isFigma = entry.target.classList.contains("figma-slide");
            document.body.classList.toggle("on-dark", isDark && !isFigma);
            document.body.classList.toggle("on-figma", isFigma);
            if (bar) bar.style.width = `${((cur + 1) / slides.length) * 100}%`;
            notifyDeck(entry.target.dataset.ch, cur);
            if (hint) hint.style.opacity = cur > 0 ? "0" : "";
          } else if (entry.intersectionRatio <= 0.05 && entry.target.classList.contains("on")) {
            entry.target.classList.remove("on");
            resetCounts(entry.target);
          }
        });
      },
      { root: deck, threshold: [0.05, 0.5] }
    );

    const onScroll = () => {
      const top = deck.scrollTop;
      const height = window.innerHeight;
      if (top <= height) {
        const p = Math.min(1, top / height);
        deck.style.setProperty("--intro-progress", p.toFixed(3));
      }
    };

    deck.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => deck.removeEventListener("scroll", onScroll));

    slides.forEach((slide) => io.observe(slide));
    if (slides[0]) notifyDeck(slides[0].dataset.ch, 0);
    cleanups.push(() => io.disconnect());

    const onKeyDown = (event) => {
      if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        go(cur + 1);
      } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        go(cur - 1);
      } else if (event.key === "Home") {
        event.preventDefault();
        go(0);
      } else if (event.key === "End") {
        event.preventDefault();
        go(slides.length - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    cleanups.push(() => window.removeEventListener("keydown", onKeyDown));

    const prog = document.getElementById("progress");
    const onProgressClick = (event) => {
      const p = event.clientX / window.innerWidth;
      go(Math.round(p * (slides.length - 1)));
    };
    if (prog) {
      prog.addEventListener("click", onProgressClick);
      cleanups.push(() => prog.removeEventListener("click", onProgressClick));
    }

    const btn = document.getElementById("flipBtn");
    const chain2 = document.getElementById("chain2");
    const note = document.getElementById("flipNote");
    if (btn && chain2 && note) {
      const onFlip = () => {
        const reversed = chain2.classList.toggle("reversed");
        btn.setAttribute("aria-pressed", String(reversed));
        btn.textContent = reversed ? "다시 단방향으로" : "방향을 뒤집다";
        note.classList.toggle("lit", reversed);
        note.textContent = reversed
          ? "소비자 신호가 설계의 입력값이 됩니다. 그 시작점이 디자인입니다."
          : "단방향을 완성한 혁명에서, 단방향을 뒤집는 혁명으로.";
      };
      btn.addEventListener("click", onFlip);
      cleanups.push(() => btn.removeEventListener("click", onFlip));
    }

    document.querySelectorAll(".fcard").forEach((card) => {
      const toggle = () => {
        card.classList.toggle("flip");
        card.setAttribute("aria-pressed", card.classList.contains("flip"));
      };
      const onClick = () => toggle();
      const onKeyDownCard = (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggle();
        }
      };
      card.addEventListener("click", onClick);
      card.addEventListener("keydown", onKeyDownCard);
      cleanups.push(() => {
        card.removeEventListener("click", onClick);
        card.removeEventListener("keydown", onKeyDownCard);
      });
    });

    const rOpen = document.getElementById("riskOpen");
    const rClosed = document.getElementById("riskClosed");
    const rDia = document.getElementById("riskDia");
    const rRead = document.getElementById("riskRead");
    const rTop = document.getElementById("riskTop");
    const rBot = document.getElementById("riskBot");

    if (rOpen && rClosed && rDia && rRead && rTop && rBot) {
      const setOpen = () => {
        rDia.classList.remove("closed");
        rOpen.classList.add("on", "danger");
        rOpen.setAttribute("aria-pressed", "true");
        rClosed.classList.remove("on");
        rClosed.setAttribute("aria-pressed", "false");
        rTop.textContent = "전문성이 빠져나감";
        rBot.textContent = "→ 외부 모델의 학습 재료";
        rRead.className = "riskread danger";
        rRead.innerHTML =
          "상용 AI를 그냥 쓰면 우리의 판단 체계가 <b>외부 플랫폼의 가치로 흡수</b>됩니다. 브랜드의 취향과 디자이너의 안목이 우리의 경쟁력이 아니라, 모델 회사의 자산으로 쌓입니다.";
      };
      const setClosed = () => {
        rDia.classList.add("closed");
        rClosed.classList.add("on");
        rClosed.setAttribute("aria-pressed", "true");
        rOpen.classList.remove("on", "danger");
        rOpen.setAttribute("aria-pressed", "false");
        rTop.textContent = "학습이 안으로 순환";
        rBot.textContent = "← 엔진은 빌리되, 노하우는 축적";
        rRead.className = "riskread safe";
        rRead.innerHTML =
          "Closed Loop에서는 엔진을 빌려 쓰되, 판단과 노하우가 <b>우리 안에 자산으로 축적</b>됩니다. 모델은 교체해도 베테랑은 사라지지 않습니다. 이것이 이 시대의 진짜 주권입니다.";
      };
      rOpen.addEventListener("click", setOpen);
      rClosed.addEventListener("click", setClosed);
      cleanups.push(() => {
        rOpen.removeEventListener("click", setOpen);
        rClosed.removeEventListener("click", setClosed);
      });
    }

    const nodes = [...document.querySelectorAll(".loopnode")];
    const lpG = document.getElementById("lpGloss");
    const lpL = document.getElementById("lpLead");
    const lpT = document.getElementById("lpTitle");
    const lpD = document.getElementById("lpDesc");
    const lpA = document.getElementById("lpAsset");
    const prog2 = document.getElementById("loopProg");
    const countEl = document.getElementById("loopCount");
    const runBtn = document.getElementById("loopRun");

    let laps = 0;
    let running = false;
    let loopInterval = null;

    if (prog2 && lpG && lpL && lpT && lpD && lpA && countEl && runBtn && nodes.length) {
      const circumference = 2 * Math.PI * 120;
      prog2.style.setProperty("--circ", circumference);

      const showStage = (index) => {
        const stage = LOOP_STAGES[index];
        lpG.textContent = stage.g;
        lpL.textContent = stage.lead;
        lpT.textContent = stage.t;
        lpD.innerHTML = stage.d;
        lpA.innerHTML = stage.a;
        nodes.forEach((node) => node.classList.toggle("active", +node.dataset.stage === index));
        prog2.style.strokeDashoffset = circumference * (1 - (index + 1) / 4);
      };

      nodes.forEach((node) => {
        const onNodeClick = () => {
          if (!running) showStage(+node.dataset.stage);
        };
        node.addEventListener("click", onNodeClick);
        cleanups.push(() => node.removeEventListener("click", onNodeClick));
      });

      const onRun = () => {
        if (running) return;
        running = true;
        runBtn.textContent = "도는 중…";
        let step = 0;
        showStage(0);
        loopInterval = window.setInterval(() => {
          step += 1;
          if (step < 4) {
            showStage(step);
          } else {
            clearInterval(loopInterval);
            loopInterval = null;
            laps += 1;
            countEl.textContent = String(laps);
            prog2.style.strokeDashoffset = circumference;
            running = false;
            runBtn.textContent = "한 바퀴 더 돌리기";
            window.setTimeout(() => showStage(0), 200);
          }
        }, 820);
      };

      runBtn.addEventListener("click", onRun);
      cleanups.push(() => {
        runBtn.removeEventListener("click", onRun);
        if (loopInterval) clearInterval(loopInterval);
      });

      showStage(0);
    }

    if (slides[0]) {
      slides[0].scrollIntoView({ behavior: "auto" });
    }

    return () => {
      document.body.classList.remove("on-dark", "on-figma");
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [deckRef]);
}
