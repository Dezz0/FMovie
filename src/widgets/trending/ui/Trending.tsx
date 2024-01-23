import { FunctionComponent, useEffect } from 'react';
import cls from './Trending.module.scss';
import { ContentWrapper } from '../../../shared/ui/contentWrapper';
import { SwitchTabs } from '../../../shared/ui/switchTabs';
import { useAppDispatch, useAppSelector } from '../../../app/providers/storeProviders/utils/hooks';
import { changeEndpoint, fetchTrending } from '../../../entities/trending/model/slice/trendingSlice';
import { Carousel } from '../../../features/carousel';

const Trending: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { endpoint, results, isLoading } = useAppSelector(state => state.trending);

    useEffect(() => {
        if (!results[endpoint]) {
            dispatch(fetchTrending(endpoint));
        }
        console.log(results[endpoint]);
    }, [endpoint]);
    const onTabChange = (tab: string) => {
        dispatch(changeEndpoint(tab === 'Day' ? 'day' : 'week'));
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
