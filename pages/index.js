import Head from "next/head";
import LoonshotPresentation from "@/components/LoonshotPresentation";

export default function Home() {
  return (
    <>
      <Head>
        <title>PROJECT LOONSHOT · Design AI 전략 보고</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="현대차 디자인 AI 전략 보고 — PROJECT LOONSHOT"
        />
      </Head>
      <LoonshotPresentation />
    </>
  );
}
