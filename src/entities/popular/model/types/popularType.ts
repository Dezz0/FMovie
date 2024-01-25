import { IRequestResults } from '../../../../shared/types/typeOfResultRequest/typeOfResultRequest';

export interface IPopularResponse {
    page: number,
    results: Array<IRequestResults>,
    total_pages: number,
    total_results: number
}
