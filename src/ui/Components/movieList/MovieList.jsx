import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/Card";
import styled from "styled-components";

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [type]);
  async function getData() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=135fa4257e677f99f9f28f86b9b92971&language=en-US`
      );
      const result = await response.json();
      setMovieList(result.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return (
    <MovieListDynamic>
      <h2 className="listTitle">
        {(type
          ? type + " " + "Movies"
          : "popular" + " " + "Movies"
        ).toUpperCase()}
      </h2>
      <div className="listCard">
        {movieList.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </MovieListDynamic>
  );
}
const MovieListDynamic = styled.div`
  margin-top: 30px;
  .listTitle {
    margin-left: 100px;
    @media (max-width: 768px) {
      margin-left: 10px;
      font-size: 18px;
    }
  }
  .listCard {
    display: flex;
    flex-wrap: wrap;
    margin: 50px 130px;
    @media (max-width: 768px) {
      margin: 10px;
      flex-direction: column;
      flex-wrap: nowrap;
    }
  }
`;
