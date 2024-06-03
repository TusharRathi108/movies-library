import useSearch from "@/providers/SearchProvider";
import { Search2Icon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavBarComponent = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  return (
    <div className="flex items-center w-full bg-slate-700 min-h-20 p-2 gap-2 justify-between">
      <div className="bg-slate-100 ml-4 w-2/4 text-slate-900 rounded-xl">
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
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value.trim())
            }
          />
        </InputGroup>
      </div>
      <Link
        href={"/playlist"}
        className="rounded-xl border-solid border-2 border-slate-900 p-2  font-medium text-slate-900 bg-slate-100"
      >
        {""}
        Playlist{""}
      </Link>
    </div>
  );
};

export default NavBarComponent;
