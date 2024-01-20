import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import cls from './NavBarIcons.module.scss';
import { HiOutlineSearch } from 'react-icons/hi';
import { VscChromeClose } from 'react-icons/vsc';
import { SlMenu } from 'react-icons/sl';

interface NavBarIconsProps {
    openSearch: () => void;
    openMobileMenu: () => void;
    mobileMenu: boolean;
    setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

const NavBarIcons: FunctionComponent<NavBarIconsProps> = (props) => {
    const { openSearch, mobileMenu, setMobileMenu, openMobileMenu } = props;
    return (
        <div className={cls.NavBarIcons}>
            <HiOutlineSearch onClick={openSearch}/>
            {mobileMenu ? (
                <VscChromeClose onClick={() => setMobileMenu(false)}/>
            ) : (
                <SlMenu onClick={openMobileMenu}/>
            )}
        </div>
    );
};

export default NavBarIcons;
