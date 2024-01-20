export interface IConfigurationResponse {
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
