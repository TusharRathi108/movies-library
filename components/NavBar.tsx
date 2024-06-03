import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center w-auto bg-slate-700 min-h-20 p-2 gap-2 justify-between">
      <div className="w-3/5 ml-4 bg-slate-100 text-slate-900 rounded-xl">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color={"black"} />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search Movies..."
            size={"md"}
            color={"black"}
            variant={"none"}
            colorScheme="blue"
            focusBorderColor="none"
          />
        </InputGroup>
      </div>
      <Link
        href={"/playlist"}
        className="rounded-xl border-solid border-2 border-slate-900 p-2  font-medium text-slate-900 bg-slate-100"
      >
        {"     "}
        Playlist{"     "}
      </Link>
    </div>
  );
};

export default NavBar;
