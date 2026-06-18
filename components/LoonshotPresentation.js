import { useRef } from "react";
import { deckSlidesRestHtml } from "@/utils/deckContent";
import { useDeckPresentation } from "@/utils/useDeckPresentation";
import DeckNav from "@/components/DeckNav";
import SlideCover from "@/components/slides/SlideCover";
import SlideOwnership from "@/components/slides/SlideOwnership";
import SlideFord from "@/components/slides/SlideFord";
import SlideChain from "@/components/slides/SlideChain";
import SlideInflection from "@/components/slides/SlideInflection";
import SlideNadella from "@/components/slides/SlideNadella";
import SlideCapital from "@/components/slides/SlideCapital";
import SlideRisk from "@/components/slides/SlideRisk";
import SlideJudgment from "@/components/slides/SlideJudgment";
import SlideLoop from "@/components/slides/SlideLoop";
import SlideClaim from "@/components/slides/SlideClaim";
import SlideRole from "@/components/slides/SlideRole";
import SlideEvidence from "@/components/slides/SlideEvidence";
import SlidePilot from "@/components/slides/SlidePilot";
import SlideAlphaGo from "@/components/slides/SlideAlphaGo";
import SlideClosing from "@/components/slides/SlideClosing";
import SlideAnnexIntro from "@/components/slides/SlideAnnexIntro";
import SlideAnnexDeclaration from "@/components/slides/SlideAnnexDeclaration";
import SlideAnnexHistory from "@/components/slides/SlideAnnexHistory";
import SlideAnnexValueChainShift from "@/components/slides/SlideAnnexValueChainShift";
import SlideAnnexEcosystem from "@/components/slides/SlideAnnexEcosystem";
import SlideAnnexGovernance from "@/components/slides/SlideAnnexGovernance";
import SlideAnnexConductor from "@/components/slides/SlideAnnexConductor";
import SlideAnnexCostCurve from "@/components/slides/SlideAnnexCostCurve";
import SlideAnnexWarRoom from "@/components/slides/SlideAnnexWarRoom";
import SlideAnnexWorkflows from "@/components/slides/SlideAnnexWorkflows";
import SlideAnnexRenderSmith from "@/components/slides/SlideAnnexRenderSmith";
import SlideAnnexMilestone from "@/components/slides/SlideAnnexMilestone";
import SlideAnnexPayoff from "@/components/slides/SlideAnnexPayoff";

export default function LoonshotPresentation() {
  const deckRef = useRef(null);
  useDeckPresentation(deckRef);

  return (
    <>
      <div id="brand">
        <span className="mark" />
        PROJECT LOONSHOT
      </div>
      <div id="counter">
        <b>01</b> / <span id="total">00</span>
      </div>
      <DeckNav deckRef={deckRef} />
      <div id="progress">
        <span className="track" />
        <i />
      </div>
      <div id="hint">
        <div className="hint-icon">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2V12M7 12L3 8M7 12L11 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span>슬라이드 이동</span>
      </div>

      <main id="deck" ref={deckRef}>
        <SlideCover />
        <SlideOwnership />
        <SlideFord />
        <SlideChain />
        <SlideInflection />
        <SlideNadella />
        <SlideCapital />
        <SlideRisk />
        <SlideJudgment />
        <SlideLoop />
        <SlideClaim />
        <SlideRole />
        <SlideEvidence />
        <SlidePilot />
        <SlideAlphaGo />
        <SlideClosing />
        <SlideAnnexIntro />
        <SlideAnnexDeclaration />
        <SlideAnnexHistory />
        <SlideAnnexValueChainShift />
        <SlideAnnexEcosystem />
        <SlideAnnexGovernance />
        <SlideAnnexConductor />
        <SlideAnnexCostCurve />
        <SlideAnnexWarRoom />
        <SlideAnnexWorkflows />
        <SlideAnnexRenderSmith />
        <SlideAnnexMilestone />
        <SlideAnnexPayoff />
        <div className="deck-rest" dangerouslySetInnerHTML={{ __html: deckSlidesRestHtml }} />
      </main>
    </>
  );
}
