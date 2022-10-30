import Link from 'next/link';
import React, { FC } from 'react'

interface TProps {
    movie: IMovie;
}

const Movie: FC<TProps> = ({ movie }) => {
    return (
        <li>
            <Link href={`/movies/${movie.id}`}>
                <img className="cursor-pointer" src={movie.Poster} alt={`${movie.Title} Poster`} />
            </Link>
            <strong className="text-lg">{movie.Title}</strong>
        </li>
    )
}

export default Movie