import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { OneMovieResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { FullMovie } from "../../entities/movie.entity";

export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {
    
    try {
        const movie = await fetcher.get<OneMovieResponse>(`/${movieId}`);

        const fullMovie = MovieMapper.fromMovieDBToEntity(movie);

        return fullMovie;
        
    } catch (err) {
        throw new Error(`Cannot get movie by id: ${movieId}`);
    }
}