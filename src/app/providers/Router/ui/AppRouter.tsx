import { FunctionComponent, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from '../../../../shared/config/routeConfig/routeConfig';
import { Loader } from '../../../../shared/ui/loader';

const AppRouter: FunctionComponent = () => {

    return (
        <Routes>
            {Object.values(RouteConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<Loader/>}>
                            {element}
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
