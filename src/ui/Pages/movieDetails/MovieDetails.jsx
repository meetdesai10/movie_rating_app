import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function MovieDetails() {
  const [currentMovieDetails, setCurrentMovieDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getData();
  }, [id]);
  async function getData() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=135fa4257e677f99f9f28f86b9b92971&language=en-US`
      );
      const result = await response.json();
      setCurrentMovieDetails(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  console.log(currentMovieDetails);
  return (
    <MovieDetailsContainer>
      <div className="posterImage">
        <img
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetails.backdrop_path != null
              ? currentMovieDetails.backdrop_path
              : "/5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg"
          }`}
          alt=""
        />
      </div>
      <div className="posterImage_overlay">
        <div className="posterImageTitle">
          {currentMovieDetails ? currentMovieDetails.original_title : ""}
        </div>
        <div className="posterImageRuntime">
          <div className="posterImageRating">
            {currentMovieDetails ? currentMovieDetails.vote_average : ""}
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="0.72"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                  stroke="black"
                  stroke-width="1.464"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="yellow"
                ></path>{" "}
              </g>
            </svg>
            <div className="vote">({currentMovieDetails.vote_count}) Votes</div>
          </div>
        </div>
        <div className="tagLine">{currentMovieDetails.tagline}</div>
        <div className="runTime">
          Duration: {currentMovieDetails.runtime} mins
        </div>
        <div className="releaseDate">
          Release Date: {currentMovieDetails.release_date}
        </div>
        <div className="genres">
          {currentMovieDetails.genres
            ? currentMovieDetails.genres.map((genre, index) => (
                <div className="genresName" key={index}>
                  {genre.name}
                </div>
              ))
            : "No genres available"}
        </div>
        <div className="posterImageOverview">
          {currentMovieDetails ? currentMovieDetails.overview : ""}
        </div>
      </div>
    </MovieDetailsContainer>
  );
}
const MovieDetailsContainer = styled.div`
  .posterImage {
    position: relative;
    overflow: hidden;
    img {
      height: 91.2vh;
      width: 100vw;
      object-fit: cover;
      filter: brightness(50%);
    }
  }
  .posterImage_overlay {
    position: absolute;
    bottom: 50px;
    margin-left: 60px;
    margin-right: 20px;
    text-align: start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .posterImageTitle {
      font-size: 50px;
      font-weight: bold;
      @media (max-width: 576px) {
        font-size: 25px;
      }
      @media (min-width: 576px) {
        font-size: 25px;
      }
      @media (min-width: 768px) {
        font-size: 50px;
      }
    }
    .posterImageRuntime {
      display: flex;
      align-items: center;
      gap: 50px;
      font-size: 25px;
      font-weight: 600;
      .posterImageRating {
        display: flex;
        align-items: center;
      }
      @media (max-width: 576px) {
        font-size: 18px;
      }
      @media (min-width: 576px) {
        font-size: 18px;
      }
      @media (min-width: 768px) {
        font-size: 25px;
      }
    }
    .releaseDate,
    .runTime {
      font-weight: bold;
      font-size: 17px;
      @media (max-width: 576px) {
        font-size: 13px;
      }
      @media (min-width: 576px) {
        font-size: 13px;
      }
      @media (min-width: 768px) {
        font-size: 17px;
      }
    }
    .tagLine {
      font-size: 20px;
      font-weight: 600;
      @media (max-width: 576px) {
        font-size: 15px;
      }
      @media (min-width: 576px) {
        font-size: 15px;
      }
      @media (min-width: 768px) {
        font-size: 20px;
      }
    }
    .genres {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      .genresName {
        border: 2.5px solid white;
        padding: 7px;
        font-weight: 600;
        border-radius: 10px;
        @media (max-width: 576px) {
          padding: 4px;
          font-size: 12px;
        }
        @media (min-width: 576px) {
          font-size: 12px;
          padding: 4px;
        }
        @media (min-width: 768px) {
          font-size: 17px;
          padding: 7px;
        }
      }
      @media (max-width: 576px) {
        gap: 5px;
      }
      @media (min-width: 576px) {
        gap: 5px;
      }

      @media (min-width: 768px) {
        gap: 20px;
      }
    }
    .posterImageOverview {
      width: 50%;
      letter-spacing: 1px;
      font-weight: 500;
      @media (max-width: 576px) {
        width: 100%;
        font-size: 12px;
      }
      @media (min-width: 576px) {
        width: 100%;
      }
      @media (min-width: 768px) {
        width: 50%;
        font-size: 14px;
      }
    }
    @media (max-width: 576px) {
      margin-left: 20px;
    }
    @media (min-width: 576px) {
      margin-left: 20px;
    }
    @media (min-width: 768px) {
      margin-left: 60px;
    }
  }
`;
