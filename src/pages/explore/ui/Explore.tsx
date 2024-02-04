import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/providers/storeProviders/utils/hooks';
import { fetchExplore } from '../../../entities/explore/model/slice/exploreSlice';
import cls from './Explore.module.scss';
import ContentWrapper from '../../../shared/ui/contentWrapper/ContentWrapper';
import { ExploreHeader } from '../../../entities/explore';
import InfiniteScroll from 'react-infinite-scroll-component';
import MoviesAndTVContainer from '../../../entities/explore/ui/MoviesAndTVContainer/MoviesAndTVContainer';
import Loader from '../../../shared/ui/loader/Loader';
import NotFoundResults from '../../../shared/ui/NotFoundResults/NotFoundResults';

const Explore: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { mediaType } = useParams<{
        mediaType: 'tv' | 'movie'
    }>();
    const explore = useAppSelector(state => state.explore);
    const [filters, setFilters] = useState({ sort_by: '', with_genres: '' });
    const pageNum = useRef<number>(1);

    useEffect(() => {
        pageNum.current = explore[mediaType!].page;
        setFilters({ sort_by: explore[mediaType!].sort_by, with_genres: explore[mediaType!].with_genres });
    }, [mediaType]);

    useEffect(() => {
        if (!explore.isLoading && mediaType) {
            const page = pageNum.current;
            dispatch(fetchExplore({ page, mediaType, filters }));
        }
    }, [filters]);

    const fetchNextMovieAndTV = () => {
        const sendData = setTimeout(() => {
            if ((explore[mediaType!].results.length <= explore[mediaType!].total_results) && mediaType) {
                pageNum.current += 1;
                const page = pageNum.current;
                dispatch(fetchExplore({ page, mediaType, filters })).then(() => {
                    clearTimeout(sendData);
                });
            }
        }, 0);
    };

    return (
        <div className={cls.Explore}>
            <ContentWrapper>
                <ExploreHeader mediaType={mediaType!} page={pageNum} filters={filters} setFilters={setFilters}/>
                {(explore.isLoading && !explore[mediaType!].results.length) && <Loader/>}
                {(!!explore[mediaType!].results.length) ?
                    <InfiniteScroll
                        className={cls.content}
                        next={fetchNextMovieAndTV}
                        hasMore={explore[mediaType!].total_pages >= pageNum.current}
                        loader=""
                        dataLength={explore[mediaType!].results.length || 0}>
                        <MoviesAndTVContainer data={explore[mediaType!].results} mediaType={mediaType!}/>
                    </InfiniteScroll>
                    : <NotFoundResults/>}
            </ContentWrapper>
        </div>
    );
};

export default Explore;
