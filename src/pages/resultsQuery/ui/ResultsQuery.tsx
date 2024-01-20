import { FunctionComponent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchContent } from '../../../entities/query/model/slice/querySlice';
import { useAppDispatch } from '../../../app/providers/storeProviders/utils/hooks';

const ResultsQuery: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { query } = useParams();
    let page = 1;

    useEffect(() => {
        if (query) {
            dispatch(fetchContent({ query, page }));
        }
    }, []);

    return (
        <div>
            {query}
        </div>
    );
};

export default ResultsQuery;
