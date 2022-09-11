import { FC, useEffect, useMemo, useRef, useState } from "react";
import { Paragraph, Stacker } from "webetti-react-sdk";

// atoms: components
import * as Atom from "./atoms";

// types
import { ICardListProps } from "./types";

// ::
const CardList: FC<ICardListProps> = ({ list, title }) => {
  const moviesTumbContainerRef = useRef<HTMLDivElement>(null);

  const [moviesTumbContainerWidth, setMoviesTumbContainerWidth] =
    useState<number>(0);

  const tumbwidth = useMemo(() => {
    return list.length * 150;
  }, [list]);

  useEffect(() => {
    if (moviesTumbContainerRef?.current?.offsetWidth) {
      setMoviesTumbContainerWidth(moviesTumbContainerRef?.current?.offsetWidth);
    }
  }, [moviesTumbContainerRef]);

  return (
    <Atom.CardListContainer
      slideLength={list?.length >= 4 ? moviesTumbContainerWidth : 0}
    >
      <Atom.TitleListContainer>
        <Stacker bottom="xxs">
          <Paragraph>{title}</Paragraph>
        </Stacker>
      </Atom.TitleListContainer>
      <Atom.MoviesTumbContainer>
        <Atom.MoviesTumbs
          ref={moviesTumbContainerRef}
          width={tumbwidth}
          className="movies_tumbs"
        >
          {list?.map((item, index) => (
            <Atom.MovieTumb
              key={`${item?.title}-${item?.id}-${index}`}
              src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
              effect="blur"
              loading="lazy"
            />
          ))}
        </Atom.MoviesTumbs>
      </Atom.MoviesTumbContainer>
    </Atom.CardListContainer>
  );
};

export default CardList;
