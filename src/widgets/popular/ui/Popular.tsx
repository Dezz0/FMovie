import { FunctionComponent, useEffect } from 'react';
import cls from './Popular.module.scss';
import { ContentWrapper } from '../../../shared/ui/contentWrapper';
import { SwitchTabs } from '../../../shared/ui/switchTabs';
import { useAppDispatch, useAppSelector } from '../../../app/providers/storeProviders/utils/hooks';
import { Carousel } from '../../../features/carousel';
import { changeEndpointPopular, fetchPopular } from '../../../entities/popular/model/slice/popularSlice';

const Popular: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { endpoint, results, isLoading } = useAppSelector(state => state.popular);

    useEffect(() => {
        if (!results[endpoint] && !isLoading) {
            dispatch(fetchPopular(endpoint));
        }
    }, [endpoint, results]);
    const onTabChange = (tab: string) => {
        dispatch(changeEndpointPopular(tab === 'Movies' ? 'movie' : 'tv'));
    };
    return (
        <div className={cls.Popular}>
            <ContentWrapper className="ContentWrapperTrending">
                <span className={cls.carouselTitle}>What's Popular</span>
                <SwitchTabs text={['Movies', 'TV Shows']} onTabChange={onTabChange}/>
            </ContentWrapper>
            <Carousel results={results[endpoint]?.results} isLoading={isLoading} endpoint={endpoint}/>
        </div>
    );
};

export default Popular;
