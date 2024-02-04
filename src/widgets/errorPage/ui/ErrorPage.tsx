import { FunctionComponent } from 'react';
import ContentWrapper from 'shared/ui/contentWrapper/ContentWrapper';
import cls from './ErrorPage.module.scss';

const ErrorPage: FunctionComponent = () => {
    const reloadPage = (): void => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <ContentWrapper>
            <div className={cls.ErrorPage}>
                <p className={cls.text}>Oops! Something went wrong</p>
                <button className={cls.button} onClick={reloadPage}>Reload page</button>
            </div>
        </ContentWrapper>
    );
};

export default ErrorPage;
