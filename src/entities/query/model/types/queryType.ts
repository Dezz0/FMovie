import { IRequestResults } from 'shared/types/typeOfResultRequest/typeOfResultRequest';

export interface IRequestResponse {
    results: Array<IRequestResults>,
    page: number,
    total_pages?: number,
    total_results?: number
    query?: string
}

export type queryParamsType = {
    query?: string,
    page: number
}
