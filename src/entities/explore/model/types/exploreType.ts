export type exploreParamsType = {
    mediaType?: string,
    page: number
    filters: {
        sort_by: string,
        with_genres: string
    }
}

export interface IMovieResults {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface ITVResults {
    adult: boolean;
    backdrop_path: string;
    first_air_date: string;
    genre_ids: Array<number>;
    id: number;
    name: string;
    origin_country: Array<string>;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

export interface IMoviesAndTV {
    results: Array<IMovieResults | ITVResults>,
    total_pages: number
    total_results: number
    page: number
    sort_by: string,
    with_genres: string
}

export interface ExplorePayloadResponse {
    pageNum: number;
    mediaType: string;
    page: number;
    results: Array<IMovieResults | ITVResults>;
    total_page: number;
    total_results: number;
}
