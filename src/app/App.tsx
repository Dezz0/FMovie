import { FunctionComponent, Suspense } from 'react';
import { NavBar } from '../widgets/navBar';
import { AppRouter } from './providers/Router';
import { Loader } from '../shared/ui/loader';

const App: FunctionComponent = () => {

    return (
        <div>
            <Suspense fallback={<Loader/>}>
                <NavBar/>
                <div className="content-page">
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
