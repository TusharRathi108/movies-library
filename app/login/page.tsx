"use client";
import { Divider, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineLogin } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { z } from "zod";
import { registerSchema } from "../schema/registerSchema";

type LoginFormData = z.infer<typeof registerSchema>;

const LoginPage = () => {
  return (
    <main className="bg-log-background bg-cover flex justify-center items-center w-full h-screen p-4">
      <section className="overflow-visible backdrop-blur-md bg-orange-600/30 shadow-lg rounded-lg realtive flex flex-col justify-start h-3.5/5 w-full md:w-3/6">
        <div className="aantialiased hover:subpixel-antialiased uppercase font-bold font-mono text-5xl 2xl:text-8xl text-yellow-950/80 text-center mt-5">
          login
        </div>
        <hr className="mt-4 border-4 border-orange-900/40" />
        <div className="border-b-4 rounded-lg border-none sm:border-orange-400/40 p-3 h-full flex flex-col justify-evenly">
          <form className="flex flex-col space-y-5 justify-between">
            <div className="flex flex-col lg:px-28">
              {/* EMAIL LABEL */}
              <input
                type="email"
                placeholder="jhondoe@gmail.com"
                className="rounded-md p-3 font-mono"
              />
            </div>
            <div className="flex flex-col lg:px-28">
              {/* PASSWORD LABEL */}
              <input
                type="password"
                placeholder="Password!"
                className="rounded-md p-3 font-mono"
              />
            </div>
            <div className="flex justify-center items-center">
              {/* BUTTON or Forget Password */}
              <button
                type="submit"
                className="flex justify-center items-center space-x-2 p-3 btn border-2 border-orange-900 text-center text-lg w-56 sm:w-72 text-orange-900 font-mono rounded-lg transition ease-linear duration-450 hover:scale-105 hover:bg-orange-900/60 hover:text-white"
              >
                <AiOutlineLogin />
                <Text>LOG-IN</Text>
              </button>
            </div>
            <div className="flex space-x-1.5 justify-center items-center">
              <Link
                href="/forget-password text-orange-900"
                className="mb-2.5 font-bold font-mono underline text-orange-900"
              >
                Forget Password?
              </Link>
              <Divider
                orientation="vertical"
                color={"black"}
                border={"1px"}
                height={"5"}
                marginBottom={"2.5"}
              />
              <Link
                href={"/register"}
                className="mb-2.5 italic font-bold font-mono underline text-orange-900"
              >
                Register
              </Link>{" "}
            </div>
          </form>
          <hr className="mb-3 sm:mt-2 w-full border-2 border-orange-900/80" />
          <div className="sm:mt-3 mt-3 mb-3 flex flex-row space-x-3 md:flex-col md:space-y-3 md:space-x-0 justify-center items-center">
            <Link
              href={""}
              className="flex justify-center items-center space-x-2 p-3 btn border-2 border-orange-900 text-lg w-56 sm:w-72 text-orange-900 font-mono rounded-lg transition ease-linear duration-450 hover:scale-105 hover:bg-orange-900/60 hover:text-white"
            >
              <BsGoogle />
              <Text>GOOGLE</Text>
            </Link>
            <Link
              href={""}
              className="flex justify-center items-center space-x-2 p-3 btn border-2 border-orange-900 text-lg w-56 sm:w-72 text-orange-900 font-mono rounded-lg transition ease-linear duration-450 hover:scale-105 hover:bg-orange-900/60 hover:text-white"
            >
              <FiGithub />
              <Text>GITHUB</Text>
            </Link>
          </div>
        </div>
      </section>
      <Toaster />
    </main>
  );
};

export default LoginPage;
