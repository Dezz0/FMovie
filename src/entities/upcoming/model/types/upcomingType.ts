import { IRequestResults } from '../../../../shared/types/typeOfResultRequest/typeOfResultRequest';

export interface IUpcomingResponse {
    dates: {
        maximum: string,
        minimum: string
    },
    page: number,
    results: Array<IRequestResults>,
    total_pages: number,
    total_results: number
}
