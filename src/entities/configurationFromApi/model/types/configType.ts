export interface IConfigurationResponse {
    config: IConfig,
    genreTV: genresType,
    genreMovie: genresType,
}

export interface IConfig {
    change_keys: Array<string>,
    images: {
        backdrop_sizes: Array<string>,
        base_url: string,
        logo_sizes: Array<string>,
        poster_sizes: Array<string>,
        profile_sizes: Array<string>,
        secure_base_url: string,
        still_sizes: Array<string>
    }
}

export type genresType = Record<'genres', Array<{
    id: number,
    name: string
}>>
