import { FunctionComponent, useEffect, useRef, useState } from 'react';
import cls from './NavBar.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from 'shared/assets/icons/logo.svg';
import ContentWrapper from 'shared/ui/contentWrapper/ContentWrapper';
import { NavBarLinks } from 'features/navBarLinks';
import { NavBarIcons } from 'features/navBarIcons';
import { PopUpSearchQuery } from 'features/popUpSearchQuery';

interface NavBarProps {

}

const NavBar: FunctionComponent<NavBarProps> = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const lastScrollY = useRef(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showSearchField, setShowSearchField] = useState(false);
    const [showNavBar, setShowNavBar] = useState('top');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const controlNavbar = () => {
        if (window.scrollY > 250) {
            if (window.scrollY > lastScrollY.current && !mobileMenu) {
                setShowNavBar('hide');
                setMobileMenu(false);
            } else {
                setShowNavBar('show');
            }
        } else {
            setShowNavBar('top');
        }
        lastScrollY.current = window.scrollY;
    };

    const openSearch = () => {
        setMobileMenu(false);
        setShowSearchField(true);
    };

    const openMobileMenu = () => {
        setMobileMenu(true);
        setShowSearchField(false);
    };

    return (
        <div className={`${mobileMenu ? cls.mobileView : cls.NavBar} ${cls[showNavBar]}`}>
            <ContentWrapper className="ContentWrapperPopUpSearchField">
                <div className={cls.logo} onClick={() => navigate('/')}>
                    <Logo/>
                    <span>FMovie</span>
                </div>
                <NavBarLinks
                    mobileMenu={mobileMenu}
                    setMobileMenu={setMobileMenu}
                    openSearch={openSearch}
                />
                <NavBarIcons
                    openSearch={openSearch}
                    mobileMenu={mobileMenu}
                    setMobileMenu={setMobileMenu}
                    openMobileMenu={openMobileMenu}
                />
            </ContentWrapper>
            {showSearchField &&
                <PopUpSearchQuery
                    setShowSearchField={setShowSearchField}
                />}
        </div>
    );
};

export default NavBar;
