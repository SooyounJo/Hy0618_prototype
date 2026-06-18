import { Fragment } from "react";

const STEPS = [
  {
    name: "Design AI",
    role: "도구",
    desc: "새 프로세스를 가능하게 하는 수단"
  },
  {
    name: "Next-Gen Process",
    role: "개발 프로세스 혁신",
    desc: "빠진 연결고리, 혁신의 진짜 대상"
  },
  {
    name: "Manufacturing",
    role: "제조 혁신",
    desc: "프로세스가 자리 잡을 때 현실이 되는 성과"
  }
];

const CRITERIA_LEFT = [
  { title: "앞단 프로젝트", desc: "제품 개발 단계가 명확히 앞단에 있는 신규 / 리프레시" },
  { title: "적정 복잡도", desc: "크로스티켓이 실제로 필요한 수준" },
  { title: "블라인드 평가", desc: "결과를 객관 평가할 판단 라인" }
];

const CRITERIA_RIGHT = [
  { title: "Go / No-Go", desc: "제품 개발 단계가 명확히 앞단에 있는 신규 / 리프레시" },
  { title: "제한된 리스크", desc: "실패해도 전사 리스크가 제한적" }
];

function PilotArrow() {
  return (
    <img
      src="/images/figma/pilot-path.svg"
      alt=""
      className="figma-pilot__arrow"
      width={134}
      height={11}
      aria-hidden
    />
  );
}

export default function SlidePilot() {
  return (
    <section className="slide figma-slide figma-pilot figma-chain" data-ch="5" data-title="파일럿 실행 구조">
      <div className="figma-chain__bg" aria-hidden="true">
        <div className="figma-chain__glow figma-chain__glow--a" />
        <div className="figma-chain__glow figma-chain__glow--b" />
      </div>

      <div className="figma-slide__inner figma-pilot__content">
        <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
          실행 구조 · 작게 시작하다
        </div>

        <h2 className="figma-pilot__headline rv head" style={{ "--rd": "600ms" }}>
          파일럿 실행 구조와 <strong>승인요청</strong>
        </h2>

        <div className="figma-pilot__path rv" style={{ "--rd": "1000ms" }}>
          {STEPS.map((step, index) => (
            <Fragment key={step.name}>
              <article className="figma-pilot__step">
                <h3>{step.name}</h3>
                <p className="figma-pilot__step-role">{step.role}</p>
                <p className="figma-pilot__step-desc">{step.desc}</p>
              </article>
              {index < STEPS.length - 1 ? <PilotArrow /> : null}
            </Fragment>
          ))}
        </div>

        <div className="figma-pilot__panels rv" style={{ "--rd": "1500ms" }}>
          <div className="figma-role__panel-col">
            <div className="figma-pill figma-pill--sm">역할 분담</div>
            <div className="figma-glass-panel">
              <ul>
                <li>
                  AI 인프라(호스팅 · 학습 테이터 · 파이프라인 · 보안)는 <strong>DE센터와 ICT본부</strong>의 전사
                  공통 영역
                </li>
                <li>
                  디자인은 워룸 안의 <strong>워크플로우 · 에이전트 조합 · 크로스티켓</strong>
                  <br />
                  →실사용과 성과 담당
                </li>
              </ul>
            </div>
          </div>
          <div className="figma-role__panel-col">
            <div className="figma-pill figma-pill--sm">주행 시험장</div>
            <div className="figma-glass-panel">
              <ul>
                <li>시험장에서 달리고 데이터를 모으고 안전을 확인한다.</li>
                <li>
                  파일럿의 목적
                  <br />
                  → <strong>반복 가능한 프로세스 템플릿</strong> / <strong>Lessons Learned</strong>
                  <br />/ 조직의 <strong>신뢰</strong> / <strong>확산 권한</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="figma-pilot__checks-wrapper rv" style={{ "--rd": "2000ms" }}>
          <div className="figma-pilot__checks">
            <div className="figma-pilot__checks-grid">
              <div className="figma-pilot__checks-col">
                {CRITERIA_LEFT.map((item, index) => (
                  <div key={item.title} className="figma-pilot__check-row">
                    <span className="figma-pilot__check-no">{index + 1}</span>
                    <span className="figma-pilot__check-title">{item.title}</span>
                    <span className="figma-pilot__check-desc">{item.desc}</span>
                  </div>
                ))}
              </div>
              <div className="figma-pilot__checks-col">
                {CRITERIA_RIGHT.map((item, index) => (
                  <div key={item.title} className="figma-pilot__check-row">
                    <span className="figma-pilot__check-no">{index + 4}</span>
                    <span className="figma-pilot__check-title">{item.title}</span>
                    <span className="figma-pilot__check-desc">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="figma-pilot__checks-note">
            설계 기준: 파일럿은 처음부터 전사 확산 가능성을 기준으로 설계
          </p>
        </div>
      </div>
    </section>
  );
}
