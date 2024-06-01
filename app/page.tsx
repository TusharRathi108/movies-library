import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";

export default function Home() {
  return (
    <main className="bg-log-background bg-cover flex min-h-screen flex-col items-center justify-center p-24">
      <section className="overflow-visible backdrop-blur-md bg-orange-600/30 shadow-lg rounded-lg realtive flex flex-col justify-start h-4/5 w-full md:w-3/6">
        <div className="antialiased hover:subpixel-antialiased uppercase font-bold text-5xl 2xl:text-8xl text-yellow-950 text-center mt-5">
          welcome!
        </div>
        <hr className="mt-4 w-auto border-4 border-orange-900/40" />
        <div className="sm:mt-2 p-6 flex flex-row space-x-3 justify-center items-center">
          <Link
            href={"/login"}
            className="flex justify-center items-center space-x-2 btn mb-1 p-3 border-2 border-orange-900 text-center text-lg w-56  text-orange-900 font-mono rounded-lg transition ease-linear duration-450 hover:scale-105 hover:bg-orange-900/60 hover:text-white"
          >
            <AiOutlineLogin />
            <Text>LOG-IN</Text>
          </Link>
          <Link
            href={"/register"}
            className="flex justify-center items-center space-x-2 btn mb-1 p-3 border-2 border-orange-900 text-center text-lg w-56  text-orange-900 font-mono rounded-lg transition ease-linear duration-450 hover:scale-105 hover:bg-orange-900/60 hover:text-white"
          >
            <AiOutlineLogin />
            <Text>SIGN-IN</Text>
          </Link>
        </div>
      </section>
    </main>
  );
}
