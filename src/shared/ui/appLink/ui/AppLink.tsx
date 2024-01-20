import { FunctionComponent } from 'react';
import './AppLink.scss';
import { LinkProps, NavLink } from 'react-router-dom';

interface AppLinkProps extends LinkProps {
    to: string;
}

const AppLink: FunctionComponent<AppLinkProps> = (props) => {
    const { to, children, ...otherProps } = props;

    return (
        <NavLink
            className={({ isActive }) => isActive ? `active` : ''}
            to={to}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
};

export default AppLink;
