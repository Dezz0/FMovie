import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/notFoundPage';
import { MainPage } from 'pages/mainPage';
import { ResultsQuery } from 'pages/resultsQuery';
import { ContentPage } from 'pages/contentPage';
import { Explore } from 'pages/explore';

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not_found',
    RESULTS_QUERY = 'results_query',
    CONTENT_PAGE = 'content_page',
    EXPLORE = 'explore'
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.RESULTS_QUERY]: 'search/:query',
    [AppRoutes.CONTENT_PAGE]: ':mediaType/:id',
    [AppRoutes.EXPLORE]: 'explore/:mediaType',
    [AppRoutes.NOT_FOUND]: '*',
};

export const RouteConfig: Record<string, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage/>,
    },
    [AppRoutes.CONTENT_PAGE]: {
        path: RouterPath.results_query,
        element: <ResultsQuery/>,
    },
    [AppRoutes.RESULTS_QUERY]: {
        path: RouterPath.content_page,
        element: <ContentPage/>,
    },
    [AppRoutes.EXPLORE]: {
        path: RouterPath.explore,
        element: <Explore/>,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPath.not_found,
        element: <NotFoundPage/>,
    },
};
