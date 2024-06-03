"use client";

import NavBarComponent from "@/components/NavBar";
import SideBarComponent from "@/components/SideBar";
import useSearch from "@/providers/SearchProvider";
import { MovieData } from "@/utils/Movie";
import { Button, Center, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { date } from "zod";

const DashboardPage = () => {
  // opening and closing the side-bar.
  const [open, setOpen] = useState(false);

  // getting the name of the movie from input field.
  const { searchTerm } = useSearch();

  // setting the data from the api.
  const [data, setData] = useState<MovieData | null>(null);

  // using effect hook to get the movie.
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movie = await axios.get<MovieData>(
          `http://www.omdbapi.com/?s=${searchTerm}&&apikey=1450402c`
        );
        setData(movie.data);

        console.log(movie.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchMovie();
  }, [searchTerm]);

  return (
    <div className="flex">
      <SideBarComponent open={open} setOpen={setOpen} />
      <div className="flex flex-col gap-3 flex-1">
        <NavBarComponent />
        {data && (
          <div className="felx-1 p-4 grid-cols-1 grid md:grid-cols-2">
            <div className="flex justify-center p-10 my-10">
              <Image src={"/"} alt={"Poster of the movie will applera here!"} />
            </div>
            <div className="flex flex-col justify-center shadow-md rounded-2xl text-white bg-slate-200">
              <Center>
                <Text className="mt-5 text-2xl text-slate-900 uppercase font-medium">
                  {" "}
                  Movie Name: {}
                </Text>
              </Center>
              <div className="text-slate-900 text-xl p-2 ml-4">
                <h1> Title: {} </h1>
                <h1> Awards: {} </h1>
                <h1> BoxOffice: {} </h1>
                <h1> Genre: {} </h1>
                <h1> Country: {} </h1>
                <Center>
                  <p>{}</p>
                </Center>
              </div>
            </div>
          </div>
        )}
        <Center>
          <Button colorScheme="teal" variant="outline">
            ADD TO PLAYLIST
          </Button>
        </Center>
      </div>
    </div>
  );
};

export default DashboardPage;
