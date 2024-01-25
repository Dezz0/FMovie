import { IRequestResults } from '../../../../shared/types/typeOfResultRequest/typeOfResultRequest';

export interface IRatedResponse {
    page: number,
    results: Array<IRequestResults>,
    total_pages: number,
    total_results: number
}
