import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import cls from './NavBarLinks.module.scss';
import { AppLink } from '../../../shared/ui/appLink';
import { HiOutlineSearch } from 'react-icons/hi';

type LinksType = {
    title: string,
    navigate: string
}

interface NavBarLinksProps {
    openSearch: () => void;
    setMobileMenu: Dispatch<SetStateAction<boolean>>;
    mobileMenu: boolean;
}

const NavBarLinks: FunctionComponent<NavBarLinksProps> = (props) => {
    const { setMobileMenu, openSearch, mobileMenu } = props;
    const links: Array<LinksType> = [
        { title: 'TV Show', navigate: 'tv' },
        { title: 'Movies', navigate: 'movie' },
    ];

    return (
        <div className={mobileMenu ? cls.NavBarLinksMob : cls.NavBarLinks}>
            {
                links.map(link => (
                    <AppLink
                        to={`explore/${link.navigate}`}
                        key={link.navigate}
                        onClick={() => setMobileMenu(false)}
                    >
                        {link.title}
                    </AppLink>
                ))
            }
            <HiOutlineSearch onClick={openSearch}/>
        </div>
    );
};

export default NavBarLinks;
