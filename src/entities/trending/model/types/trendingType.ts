import { IRequestResults } from 'shared/types/typeOfResultRequest/typeOfResultRequest';

export interface ITrendingResponse {
    page: number,
    results: Array<IRequestResults>,
    total_pages: number,
    total_results: number
}
