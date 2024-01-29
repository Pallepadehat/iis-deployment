import Image from "next/image";
import { GoogleGeminiEffectDemo } from "./components/effectPage";

export default function Home() {
  return (
    <>
      <section className="w-full h-full">
        <GoogleGeminiEffectDemo />
      </section>
    </>
  );
}
