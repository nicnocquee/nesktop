import Image from "next/image";
import Landing from "@/app/landing.mdx";
import Logo from "@/public/nesktop.webp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 space-y-8">
      <Image src={Logo} width={500} height={500} alt="nesktop-logo" />
      <div className="w-full max-w-5xl mx-auto prose">
        <Landing />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
