import { FunctionComponent, useEffect } from 'react';
import { useAppDispatch } from '../../../app/providers/storeProviders/utils/hooks';
import { fetchConfig } from '../../../entities/configurationFromApi/model/slice/configSlice';
import { fetchUpcoming } from '../../../entities/upcoming/model/slice/upcomingSlice';
import { SearchContent } from '../../../widgets/searchContent';
import cls from './MainPage.module.scss';

const MainPage: FunctionComponent = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchConfig());
        dispatch(fetchUpcoming());
    }, [dispatch]);

    return (
        <div className={cls.MainPage}>
            <SearchContent/>
            <div style={{ height: '1000px' }}></div>
        </div>
    );
};

export default MainPage;
