import { FunctionComponent, useEffect } from 'react';
import { AppRouter } from './providers/Router';
import { NavBar } from '../widgets/navBar';
import { Footer } from '../widgets/footer';
import { useAppDispatch, useAppSelector } from './providers/storeProviders/utils/hooks';
import { fetchConfig } from '../entities/configurationFromApi/model/slice/configSlice';

const App: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { genres, isLoading } = useAppSelector(state => state.config);

    useEffect(() => {
        if (!Object.keys(genres).length && !isLoading) {
            dispatch(fetchConfig());
        }

    }, [dispatch, genres]);
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
