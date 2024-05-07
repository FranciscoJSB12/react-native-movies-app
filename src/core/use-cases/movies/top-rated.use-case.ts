import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const topRated = await fetcher.get<MovieDBResponse>('/top_rated');

        return topRated.results.map(MovieMapper.fromMovieDBResultToEntity);

    } catch (err) {
        console.log(err);
        throw new Error('Error fetching movies - Popular use case');
    }
}