import React, { FunctionComponent, useState } from 'react';
import cls from './SearchQuery.module.scss';
import { Input } from '../../../shared/ui/input';
import { Button } from '../../../shared/ui/button';
import { useNavigate } from 'react-router-dom';

interface SearchQueryProps {
    className?: string;
}

const SearchQuery: FunctionComponent<SearchQueryProps> = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const searchQueryHandler = (event: {
        preventDefault: () => void
    }): void => {
        event.preventDefault();
        if (query.trim().length > 0) {
            navigate(`/search/${query.trim()}`);
        }
    };

    return (
        <form onSubmit={searchQueryHandler} className={cls.SearchQuery}>
            <Input
                type="text"
                className="searchInput"
                placeholder="Search for a movie or tv show...."
                onChange={(event) => setQuery(event.target.value)}
                value={query}
            />
            <Button type={'submit'} className={'searchButton'}>
                Search
            </Button>
        </form>
    );
};

export default SearchQuery;
