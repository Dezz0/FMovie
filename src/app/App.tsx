import { FunctionComponent, Suspense } from 'react';
import { NavBar } from '../widgets/navBar';
import { AppRouter } from './providers/Router';
import { Loader } from '../shared/ui/loader';
import { Footer } from '../widgets/footer';

const App: FunctionComponent = () => {

    return (
        <div>
            <Suspense fallback={<Loader/>}>
                <NavBar/>
                <div className="content-page">
                    <AppRouter/>
                </div>
                <Footer/>
            </Suspense>
        </div>
    );
};

export default App;
