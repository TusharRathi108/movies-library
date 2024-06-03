"use client";
import React, { useState } from "react";
import { MdOutlineLocalMovies } from "react-icons/md";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import Link from "next/link";
import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";

const DashboardPage = () => {
  // opening and closing the side-bar.
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`bg-slate-900 h-screen p-5 pt-8 ${
          open ? "w-60" : "w-24"
        } duration-300 relative backdrop-blur-0`}
      >
        <BsArrowLeftShort
          className={`bg-slate-300 text-slate-800 text-3xl border rounded-full border-2 border-slate-900
        absolute -right-3 top-9 cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex gap-2">
          <MdOutlineLocalMovies
            className={`bg-slate-300 text-4xl rounded-md p-1 cursor-pointer block float-left ml-2 top-5 duration-700 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            RAPHSODY
          </h1>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <NavBar />
        <div className="p-5">Dashbaoard</div>
      </div>
    </div>
  );
};

export default DashboardPage;
