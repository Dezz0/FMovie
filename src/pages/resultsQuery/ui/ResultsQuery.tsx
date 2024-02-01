import { FunctionComponent, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import cls from './ResultsQuery.module.scss';
import { fetchQueryResults } from '../../../entities/query/model/slice/querySlice';
import { useAppDispatch, useAppSelector } from '../../../app/providers/storeProviders/utils/hooks';
import ContentWrapper from '../../../shared/ui/contentWrapper/ContentWrapper';
import { NotFoundResults, QueryContent, TotalResults } from '../../../entities/query';

const ResultsQuery: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { query } = useParams();
    const { requests } = useAppSelector(state => state.query);
    const currentPage = useRef(requests[query!]?.page || 1);

    const fetchFilms = () => {
        const sendData = setTimeout(() => {
            if (requests[query!].results.length !== requests[query!].total_results) {
                currentPage.current += 1;
                const page = currentPage.current;
                dispatch(fetchQueryResults({ query, page })).then(() => {
                    clearTimeout(sendData);
                });
            }
        }, 0);
    };

    useEffect(() => {
        let page = currentPage.current;
        dispatch(fetchQueryResults({ query, page }));
    }, [query]);

    return (
        <div className={cls.ResultsQuery}>
            <ContentWrapper>
                {requests[query!] ?
                    (<>
                        <TotalResults total_results={requests[query!].total_results}/>
                        <InfiniteScroll
                            className={cls.resultsContainer}
                            next={fetchFilms}
                            hasMore={requests[query!]?.total_results as number >= currentPage.current}
                            loader=""
                            dataLength={requests[query!]?.results?.length || 0}
                        >
                            <QueryContent data={requests[query!]?.results}/>
                        </InfiniteScroll>
                    </>)
                    : <NotFoundResults/>}
            </ContentWrapper>
        </div>
    );
};

export default ResultsQuery;
