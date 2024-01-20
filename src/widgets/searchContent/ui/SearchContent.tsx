import { FunctionComponent } from 'react';
import cls from './SearchContent.module.scss';
import { Banner } from '../../banner';
import { useAppSelector } from '../../../app/providers/storeProviders/utils/hooks';
import { ContentWrapper } from '../../../shared/ui/contentWrapper';
import { SearchQuery } from '../../../features/searchQuery';

const SearchContent: FunctionComponent = () => {
    const isLoading: boolean = useAppSelector(state => state.upcoming.isLoading);

    return (
        <div className={cls.SearchContent}>
            {!isLoading && <Banner/>}
            <div className={cls.opacityLayer}></div>
            <ContentWrapper>
                <div className={cls.textContent}>
                    <span className={cls.title}>Welcome.</span>
                    <span className={cls.subTitle}>
                        Millions of movies, TV shows and people to discover.Explore now.
                    </span>
                    <SearchQuery/>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default SearchContent;
