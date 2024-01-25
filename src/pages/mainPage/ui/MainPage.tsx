import { FunctionComponent } from 'react';
import cls from './MainPage.module.scss';
import { SearchContent } from '../../../widgets/searchContent';
import { Trending } from '../../../widgets/trending';
import { Popular } from '../../../widgets/popular';
import { Rated } from '../../../widgets/rated';

const MainPage: FunctionComponent = () => {

    return (
        <div className={cls.MainPage}>
            <SearchContent/>
            <Trending/>
            <Popular/>
            <Rated/>
        </div>
    );
};

export default MainPage;
