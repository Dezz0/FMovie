import { Dispatch, FunctionComponent, MutableRefObject, SetStateAction } from 'react';
import cls from './ExploreHeader.module.scss';
import { SelectGroup } from '../../../../features/explore';

interface ExploreHeaderProps {
    mediaType: 'tv' | 'movie';
    page: MutableRefObject<number>;
    filters: {
        sort_by: string,
        with_genres: string
    };
    setFilters: Dispatch<SetStateAction<{
        sort_by: string;
        with_genres: string;
    }>>;
}

const ExploreHeader: FunctionComponent<ExploreHeaderProps> = ({ page, mediaType, filters, setFilters }) => {

    return (
        <div className={cls.ExploreHeader}>
            <div className={cls.pageTitle}>{mediaType === 'tv' ? 'Explore TV Shows' : 'Explore Movies'}</div>
            <SelectGroup
                mediaType={mediaType!}
                filters={filters}
                setFilters={setFilters}
                page={page}
            />
        </div>
    );
};

export default ExploreHeader;
