import { FunctionComponent } from 'react';
import cls from './NotFoundResults.module.scss';

const NotFoundResults: FunctionComponent = () => {

    return (
        <span className={cls.NotFoundResults}>
            Sorry, Results not found!
        </span>
    );
};

export default NotFoundResults;
