import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/providers/storeProviders/utils/hooks';
import { fetchExplore } from '../../../entities/explore/model/slice/exploreSlice';
import Loader from '../../../shared/ui/loader/Loader';
import { SelectGroup } from '../../../features/explore';
import cls from './Explore.module.scss';
import ContentWrapper from '../../../shared/ui/contentWrapper/ContentWrapper';

const Explore: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { mediaType } = useParams();
    const explore = useAppSelector(state => state.explore);
    const [filters, setFilters] = useState({ sort_by: '', with_genres: '' });
    const pageNum = useRef<number>(1);

    useEffect(() => {
        if (mediaType === 'tv' || mediaType === 'movie') {
            pageNum.current = explore[mediaType].page;
            setFilters({ sort_by: explore[mediaType].sort_by, with_genres: explore[mediaType].with_genres });
        }
    }, [mediaType]);

    useEffect(() => {
        if (!explore.isLoading) {
            const page = pageNum.current;
            dispatch(fetchExplore({ page, mediaType, filters }));
        }
    }, [filters]);

    const fetchNextMovieAndTV = () => {
        const sendData = setTimeout(() => {
            if ((mediaType === 'tv' || mediaType === 'movie') && explore[mediaType].results.length <= explore[mediaType].total_results) {
                pageNum.current += 1;
                const page = pageNum.current;
                dispatch(fetchExplore({ page, mediaType, filters })).then(() => {
                    clearTimeout(sendData);
                });
            }
        }, 0);
    };

    if (explore.isLoading) {
        return <Loader/>;
    }

    return (
        <div className={cls.Explore}>
            <ContentWrapper>
                <SelectGroup
                    mediaType={mediaType!}
                    filters={filters}
                    setFilters={setFilters}
                    page={pageNum}
                />
            </ContentWrapper>
        </div>
    );
};

export default Explore;
