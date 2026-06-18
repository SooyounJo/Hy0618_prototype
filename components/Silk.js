import dynamic from "next/dynamic";

// Client-only wrapper for the heavy WebGL Silk background.
// This avoids running @react-three/fiber on the Next.js server.
const Silk = dynamic(() => import("./SilkImpl"), {
  ssr: false
});

export default Silk;

