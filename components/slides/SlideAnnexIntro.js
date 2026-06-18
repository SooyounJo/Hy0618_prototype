import Silk from "../Silk";

export default function SlideAnnexIntro() {
  return (
    <section className="slide figma-slide figma-annex-intro" data-ch="a" data-title="부록 · 근거와 배경">
      <div className="figma-annex-intro__bg" aria-hidden="true">
        <Silk
          speed={4}
          scale={0.45}
          color="#B5BECF"
          color2="#E0E7EF"
          noiseIntensity={1.2}
          rotation={0.1}
        />
      </div>
      <div className="figma-slide__inner figma-annex-intro__content">
        <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
          부록
        </div>

        <h2 className="figma-annex-intro__headline rv head" style={{ "--rd": "600ms" }}>
          근거와<br /><strong>배경자료</strong>
        </h2>

        <p className="figma-annex-intro__summary rv" style={{ "--rd": "1000ms" }}>
          본편에서 압축한 현장 기록과 상세 분석
        </p>
      </div>
    </section>
  );
}
