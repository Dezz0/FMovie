import { Dispatch, FunctionComponent, MutableRefObject, SetStateAction, useState } from 'react';
import './SelectGroup.scss';
import Select from 'react-select/base';
import { useAppSelector } from '../../../app/providers/storeProviders/utils/hooks';

interface SelectGroupProps {
    mediaType: string;
    page: MutableRefObject<number>;
    filters: {
        sort_by: string,
        with_genres: string
    };
    setFilters: Dispatch<SetStateAction<{
        sort_by: string;
        with_genres: string;
    }>>;
}

const sortByData = [
    { value: 'popularity.desc', label: 'Popularity Descending' },
    { value: 'popularity.asc', label: 'Popularity Ascending' },
    { value: 'vote_average.desc', label: 'Rating Descending' },
    { value: 'vote_average.asc', label: 'Rating Ascending' },
    { value: 'primary_release_date.desc', label: 'Release Date Descending' },
    { value: 'primary_release_date.asc', label: 'Release Date Ascending' },
    { value: 'original_title.asc', label: 'Title (A-Z)' },
];

const SelectGroup: FunctionComponent<SelectGroupProps> = ({ mediaType, filters, setFilters, page }) => {
    const { genresMovie, genresTV } = useAppSelector(state => state.config);
    const [genre, setGenre] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const [showSortBy, setShowSortBy] = useState(false);
    const [showGenres, setShowGenres] = useState(false);
    const [handleTextSortBy, setHandleTextSortBy] = useState('');
    const [handleTextGenres, setHandleTextGenres] = useState('');
    console.log(sortBy, 'sortBy');
    console.log(genre, 'genre');
    const onChange = (selectedItems: any, action: any) => {
        if (action.name === 'sortBy') {
            setSortBy(selectedItems);
            if (action.action !== 'clear') {
                setFilters({ ...filters, sort_by: selectedItems.value });
            } else {
                setFilters({ ...filters, sort_by: '' });
            }
        }

        if (action.name === 'genres') {
            setGenre(selectedItems);
            if (action.action !== 'clear') {
                let genreId = selectedItems.map((g: {
                    id: number,
                    name: string
                }) => g.id);
                genreId = JSON.stringify(genreId).slice(1, -1);
                setFilters({ ...filters, with_genres: genreId });
            } else {
                setFilters({ ...filters, with_genres: '' });
            }
        }
        page.current = 1;
    };

    return (
        <div className="filters">
            <Select
                isMulti
                name="genres"
                closeMenuOnSelect={false}
                options={mediaType === 'tv' ? genresTV : genresMovie}
                getOptionLabel={(option) => option!.name}
                getOptionValue={(option) => option!.id.toString()}
                onChange={onChange}
                onInputChange={(inputValue) => setHandleTextGenres(inputValue)}
                inputValue={handleTextGenres}
                onMenuOpen={() => setShowGenres(true)}
                onMenuClose={() => setShowGenres(false)}
                menuIsOpen={showGenres}
                placeholder="Select genres"
                className="react-select-container genresDD"
                classNamePrefix="react-select"
                value={genre}/>
            <Select
                name="sortBy"
                value={sortBy}
                options={sortByData}
                onChange={onChange}
                isClearable={true}
                placeholder="Sort by"
                className="react-select-container sortbyDD"
                classNamePrefix="react-select"
                onMenuClose={() => setShowSortBy(false)}
                onMenuOpen={() => setShowSortBy(true)}
                menuIsOpen={showSortBy}
                onInputChange={(inputValue) => setHandleTextSortBy(inputValue)}
                inputValue={handleTextSortBy}/>
        </div>
    );
};

export default SelectGroup;
