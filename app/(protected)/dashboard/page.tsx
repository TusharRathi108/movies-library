"use client";
import NavBarComponent from "@/components/NavBar";
import SideBarComponent from "@/components/SideBar";
import useSearch from "@/providers/SearchProvider";
import { MovieSchema } from "@/utils/Movie";
import { Button, Center, Image, Spacer, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  // opening and closing the side-bar.
  const [open, setOpen] = useState(false);

  // getting the name of the movie from input field.
  const { searchTerm, userEmail } = useSearch();

  console.log(userEmail);

  // setting the data from the api.
  const [data, setData] = useState<MovieSchema>();

  // using effect hook to get the movie.
  useEffect(() => {
    const fetchMovie = async () => {
      if (!searchTerm) return null;
      try {
        const response: MovieSchema = await axios.get(
          `http://www.omdbapi.com/?t=${searchTerm}&&apikey=1450402c`
        );
        setData(response);
      } catch (e) {
        console.log(e);
      }
    };

    fetchMovie();
  }, [searchTerm]);

  // added to playlist.

  return (
    <div className="flex">
      <SideBarComponent open={open} setOpen={setOpen} />
      <div className="flex flex-col gap-3 flex-1">
        <NavBarComponent />
        {data?.data && (
          <div className="felx-1 p-4 grid-cols-1 grid md:grid-cols-2">
            <div className="flex justify-center p-10 my-10">
              <Image
                src={data.data.Poster}
                alt={"Poster of the movie will applera here!"}
              />
            </div>
            <div className="flex flex-col justify-center shadow-md rounded-2xl text-white bg-slate-200">
              <Center>
                <Text className="mt-5 text-2xl text-slate-900 uppercase font-medium">
                  {" "}
                  Movie Name: {data?.data.Title}
                </Text>
              </Center>
              <div className="text-slate-900 text-xl p-2 ml-4">
                <h1> Title: {data?.data.Title} </h1>
                <h1> Awards: {data?.data.Awards} </h1>
                <h1> BoxOffice: {data?.data.BoxOffice} </h1>
                <h1> Genre: {data?.data.Genre} </h1>
                <h1> Country: {data?.data.Country} </h1>
                <Center>
                  <p>{data?.data.Plot}</p>
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
