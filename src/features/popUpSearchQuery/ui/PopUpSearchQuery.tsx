import { Dispatch, FunctionComponent, SetStateAction, useState } from 'react';
import cls from './PopUpSearchQuery.module.scss';
import { VscChromeClose } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import ContentWrapper from 'shared/ui/contentWrapper/ContentWrapper';
import Input from 'shared/ui/input/Input';

interface PopUpSearchQueryProps {
    setShowSearchField: Dispatch<SetStateAction<boolean>>;
}

const PopUpSearchQuery: FunctionComponent<PopUpSearchQueryProps> = (props) => {
    const { setShowSearchField } = props;
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const searchQueryHandler = (event: {
        preventDefault: () => void
    }) => {
        event.preventDefault();
        if (query.trim().length > 0) {
            navigate(`/search/${query.trim()}`);
            setShowSearchField(false);
        }
    };
    return (
        <div className={cls.searchBar}>
            <ContentWrapper className="ContentWrapperPopUpSearchField">
                <form className={cls.PopUpSearchQuery} onSubmit={searchQueryHandler}>
                    <Input
                        className="searchQueryPopUp"
                        type="text"
                        placeholder="Search for a movie or tv show...."
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                    />
                    <VscChromeClose
                        onClick={() => setShowSearchField(false)}
                    />
                </form>
            </ContentWrapper>
        </div>
    );
};

export default PopUpSearchQuery;
