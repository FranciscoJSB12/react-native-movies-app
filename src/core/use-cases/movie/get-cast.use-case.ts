import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBCastResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";

export const getMovieCastUseCase = async (fetcher: HttpAdapter, movieId: number) => {
    try {
        const { cast } = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`);

        const actors = cast.map(CastMapper.fromMovieDBToCastEntity);

        return actors;
    } catch (err) {
        throw new Error(`Cannot get movie cast ${movieId}`);
    }
}