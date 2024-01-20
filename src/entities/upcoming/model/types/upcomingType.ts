import { IRequestFilm } from '../../../../shared/types/typeOfResultRequest/typeOfResultRequest';

export interface IUpcomingResponse {
    dates: {
        maximum: string,
        minimum: string
    },
    page: number,
    results: Array<IRequestFilm>,
    total_pages: number,
    total_results: number
}
