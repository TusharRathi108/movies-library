"use client";
import { Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserInfo } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CSSProperties } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineLogin } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { z } from "zod";
import { registerSchema } from "../schema/registerSchema";
import toast, { Toaster } from "react-hot-toast";

const textStyle: CSSProperties = {
  textDecoration: "underline",
  fontWeight: "bold",
  fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterPage = ({ user }: { user?: UserInfo }) => {
  // for redirection purpose.
  const router = useRouter();

  // react hook form to submit new user details.
  const { register, handleSubmit } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  // "POST" call to submit user info.
  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    try {
      await axios.post("/api/register-user", data);
      router.push("/login");
    } catch (e) {
      console.log("Error: ", e);
      toast.error("An error has occured!");
    }
  };

  return (
    <main className="bg-log-background bg-cover flex justify-center items-center w-full h-screen p-4">
      <section className="overflow-visible backdrop-blur-md bg-orange-600/30 shadow-lg rounded-lg realtive flex flex-col justify-start h-3.5/5 w-full md:w-3/6">
        <div className="antialiased hover:subpixel-antialiased uppercase font-bold font-mono text-5xl 2xl:text-8xl text-yellow-950/80 text-center mt-5">
          register yourself!
        </div>
        <hr className="mt-4 border-4 border-orange-900/40" />
        <div className="overflow-scroll p-3 h-full flex flex-col xl:grid xl:grid-flow-row xl:grid-cols-1 xl:grid-rows-3 gap-1">
          <div className="rounded-xl row-span-2 pt-3 pr-3 pl-3 pb-0">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="h-full w-auto py-1 px-12"
            >
              <input
                type="text"
                {...register("name")}
                placeholder="Full Name"
                className="mt-2.5 mb-1 p-3 font-mono w-full rounded-lg"
              />
              <input
                type="text"
                {...register("email")}
                placeholder="jhondoe@gmail.com"
                className="mt-1 mb-1 p-3 w-full font-mono rounded-lg"
              />
              <input
                type="text"
                {...register("phoneNumber")}
                placeholder="Phone Number"
                className="mt-1 mb-1 p-3 w-full font-mono rounded-lg"
              />
              <input
                type="text"
                {...register("password")}
                placeholder="Password"
                className="mt-1 mb-1 p-3 w-full font-mono rounded-lg"
              />
              <div className="mt-4 rounded-xl p-2">
                <div className="mt-0.5 flex flex-col justify-start items-center h-full">
                  <button
                    type="submit"
                    className="flex justify-center items-center space-x-2 p-3 btn mb-0.5 text-center border-2 border-orange-900 text-lg w-56 sm:w-60 text-orange-900 font-mono rounded-lg transition ease-linear duration-450 hover:scale-105 hover:bg-orange-900/60 hover:text-white"
                  >
                    <AiOutlineLogin />
                    <Text>REGISTER</Text>
                  </button>
                  <Link className="flex space-x-1.5 mt-5 mb-2" href="/login">
                    <Text color={"orange.900"} style={textStyle}>
                      Existing User?
                    </Text>
                  </Link>
                </div>
              </div>{" "}
            </form>
          </div>{" "}
          {/* FORM */}
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
      <Toaster />
    </main>
  );
};

export default RegisterPage;
