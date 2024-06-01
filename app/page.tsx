import Image from "next/image";
import Link from "next/link";
import Friends from "@/public/friends.webp";
import Landing from "@/app/landing.mdx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 space-y-8">
      <Image unoptimized src={Friends} width={500} height={375} alt="friends" />
      <div className="w-full max-w-5xl mx-auto prose lg:prose-xl">
        <Landing />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
