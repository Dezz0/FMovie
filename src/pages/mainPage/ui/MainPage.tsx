import { FunctionComponent } from 'react';
import { SearchContent } from 'widgets/searchContent';
import { Trending } from 'widgets/trending';
import { Popular } from 'widgets/popular';
import { Rated } from 'widgets/rated';

const MainPage: FunctionComponent = () => {

    return (
        <div>
            <SearchContent/>
            <Trending/>
            <Popular/>
            <Rated/>
        </div>
    );
};

export default MainPage;
