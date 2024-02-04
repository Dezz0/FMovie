import {
    ICastResults,
    ICrewResults,
    IRequestResults,
    IVideosResults,
} from 'shared/types/typeOfResultRequest/typeOfResultRequest';

export interface IVideosResponse {
    id: number,
    results: Array<IVideosResults>
}

export interface ICreditsResponse {
    cast: Array<ICastResults>,
    crew: Array<ICrewResults>,
    id: number
}

type Belongs_to_collectionType = {
    backdrop_path: string,
    id: number,
    name: string,
    poster_path: string
}

type GenresType = Array<{
    id: number,
    name: string
}>

type Production_companiesType = Array<{
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
}>

type Production_countriesType = Array<{
    iso_3166_1: string,
    name: string
}>

type Spoken_languagesType = Array<{
    english_name: string,
    iso_639_1: string
    name: string
}>

export interface IDetailsResponse {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: Belongs_to_collectionType
    budget: number
    genres: GenresType
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: Production_companiesType
    production_countries: Production_countriesType
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: Spoken_languagesType
    status: string
    tagline: string
    title: string
    name: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface ISimilarResponse {
    page: number,
    results: Array<IRequestResults>,
    total_pages: number,
    total_results: number
}
