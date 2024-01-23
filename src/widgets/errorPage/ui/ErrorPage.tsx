import { FunctionComponent } from 'react';
import cls from './ErrorPage.module.scss';

const ErrorPage: FunctionComponent = () => {
    const reloadPage = (): void => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={cls.ErrorPage}>
            <p>Error page</p>
            <button onClick={reloadPage}>Reload page</button>
        </div>
    );
};

export default ErrorPage;
