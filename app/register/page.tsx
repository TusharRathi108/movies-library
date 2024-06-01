import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { CSSProperties } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

const textStyle: CSSProperties = {
  textDecoration: "underline",
  fontWeight: "bold",
  fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};

const RegisterPage = () => {
  return (
    <main className="bg-log-background bg-cover flex justify-center items-center w-full h-screen p-4">
      <section className="overflow-visible backdrop-blur-md bg-orange-600/30 shadow-lg rounded-lg realtive flex flex-col justify-start h-3.5/5 w-full md:w-3/6">
        <div className="antialiased hover:subpixel-antialiased uppercase font-bold font-mono text-5xl 2xl:text-8xl text-yellow-950/80 text-center mt-5">
          register yourself!
        </div>
        <hr className="mt-4 border-4 border-orange-900/40" />
        <div className="overflow-scroll p-3 h-full flex flex-col xl:grid xl:grid-flow-row xl:grid-cols-1 xl:grid-rows-3 gap-1">
          <div className="rounded-xl row-span-2 p-3">
            <form className="h-full w-auto py-1 px-12">
              <input
                className="mt-2.5 mb-1 p-3 font-mono w-full rounded-lg"
                type="text"
                placeholder="Full Name"
              />
              <input
                className="mt-1 mb-1 p-3 w-full font-mono rounded-lg"
                type="text"
                placeholder="jhondoe@gmail.com"
              />
              <input
                className="mt-1 mb-1 p-3 w-full font-mono rounded-lg"
                type="text"
                placeholder="Phone Number"
              />
              <input
                className="mt-1 mb-1 p-3 w-full font-mono rounded-lg"
                type="text"
                placeholder="Password"
              />
            </form>
          </div>{" "}
          {/* FORM */}
          <div className="rounded-xl p-2">
            <div className="mt-0.5 flex flex-col justify-start items-center h-full">
              <Link
                href="/dashboard"
                className="flex justify-center items-center space-x-2 p-3 btn mb-0.5 text-center border-2 border-orange-900 text-lg w-56 sm:w-60 text-orange-900 font-mono rounded-lg transition ease-linear duration-450 hover:scale-105 hover:bg-orange-900/60 hover:text-white"
              >
                <AiOutlineLogin />
                <Text>REGISTER</Text>
              </Link>
              <Link className="flex space-x-1.5 mt-5 mb-2" href="/login">
                <Text color={"orange.900"} style={textStyle}>
                  Existing User?
                </Text>
              </Link>
            </div>
          </div>{" "}
          <hr className="mb-3 sm:mt-1 w-full border-2 border-orange-900/80" />
          {/* BUTTONS */}
          <div className="p-2 row-span-0 justify-center items-center flex flex-row space-x-3">
            <Link
              href=""
              className="flex justify-center items-center space-x-2 p-3 border-2 border-orange-900 text-center text-lg w-48 text-orange-900 font-mono rounded-lg transition ease-linear duration-450 hover:scale-105 hover:bg-orange-900/60 hover:text-white"
            >
              <BsGoogle />
              <Text>GOOGLE</Text>
            </Link>
            <Link
              href=""
              className="flex justify-center items-center space-x-2 p-3 border-2 border-orange-900 text-center text-lg w-48 text-orange-900 font-mono rounded-lg transition ease-linear duration-450 hover:scale-105 hover:bg-orange-900/60 hover:text-white"
            >
              <FiGithub />
              <Text>GITHUB</Text>
            </Link>
          </div>{" "}
          {/* OAuth Buttons */}
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
