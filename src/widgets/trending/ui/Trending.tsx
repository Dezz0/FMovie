import { FunctionComponent, useEffect } from 'react';
import cls from './Trending.module.scss';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProviders/utils/hooks';
import { changeEndpointTrending, fetchTrending } from 'entities/trending/model/slice/trendingSlice';
import { Carousel } from 'features/carousel';
import ContentWrapper from 'shared/ui/contentWrapper/ContentWrapper';
import SwitchTabs from 'shared/ui/switchTabs/SwitchTabs';

const Trending: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { endpoint, results, isLoading } = useAppSelector(state => state.trending);

    useEffect(() => {
        if (!results[endpoint] && !isLoading) {
            dispatch(fetchTrending(endpoint));
        }
    }, [endpoint, results]);
    const onTabChange = (tab: string) => {
        dispatch(changeEndpointTrending(tab === 'Day' ? 'day' : 'week'));
    };
    return (
        <div className={cls.Trending}>
            <ContentWrapper className="ContentWrapperTrending">
                <span className={cls.carouselTitle}>Trending</span>
                <SwitchTabs text={['Day', 'Week']} onTabChange={onTabChange}/>
            </ContentWrapper>
            <Carousel results={results[endpoint]?.results} isLoading={isLoading}/>
        </div>
    );
};

export default Trending;
