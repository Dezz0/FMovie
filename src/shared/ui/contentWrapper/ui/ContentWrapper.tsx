import { FunctionComponent, ReactNode } from 'react';
import cls from './ContentWrapper.module.scss';

interface ContentWrapperProps {
    className?: string;
    children: ReactNode;
}

const ContentWrapper: FunctionComponent<ContentWrapperProps> = ({ children, className = 'ContentWrapper' }) => {

    return (
        <div className={cls[className]}>
            {children}
        </div>
    );
};

export default ContentWrapper;
