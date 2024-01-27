import { FunctionComponent, useEffect } from 'react';
import cls from './Rated.module.scss';
import { useAppDispatch, useAppSelector } from '../../../app/providers/storeProviders/utils/hooks';
import { Carousel } from '../../../features/carousel';
import { changeEndpointRated, fetchRated } from '../../../entities/rated/model/slice/ratedSlice';
import ContentWrapper from '../../../shared/ui/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../shared/ui/switchTabs/SwitchTabs';

const Rated: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { endpoint, results, isLoading } = useAppSelector(state => state.rated);

    useEffect(() => {
        if (!results[endpoint] && !isLoading) {
            dispatch(fetchRated(endpoint));
        }
    }, [endpoint, results]);
    const onTabChange = (tab: string) => {
        dispatch(changeEndpointRated(tab === 'Movies' ? 'movie' : 'tv'));
    };
    return (
        <div className={cls.Rated}>
            <ContentWrapper className="ContentWrapperTrending">
                <span className={cls.carouselTitle}>Top Rated</span>
                <SwitchTabs text={['Movies', 'TV Shows']} onTabChange={onTabChange}/>
            </ContentWrapper>
            <Carousel results={results[endpoint]?.results} isLoading={isLoading} endpoint={endpoint}/>
        </div>
    );
};

export default Rated;
