import { FunctionComponent, useEffect } from 'react';
import { AppRouter } from './providers/Router';
import { NavBar } from '../widgets/navBar';
import { Footer } from '../widgets/footer';
import { useAppDispatch, useAppSelector } from './providers/storeProviders/utils/hooks';
import { fetchConfig } from '../entities/configurationFromApi/model/slice/configSlice';
import { fetchUpcoming } from '../entities/upcoming/model/slice/upcomingSlice';

const App: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { genres, isLoading } = useAppSelector(state => state.config);
    const { results } = useAppSelector(state => state.upcoming);

    useEffect(() => {
        if (!Object.keys(genres).length && !isLoading) {
            dispatch(fetchConfig());
        }
        if (!results?.length) {
            dispatch(fetchUpcoming());
        }

    }, [dispatch, genres, results]);
    return (
        <div>
            <NavBar/>
            <div className="content-page">
                <AppRouter/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
