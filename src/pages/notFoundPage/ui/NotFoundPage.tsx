import { FunctionComponent } from 'react';
import cls from './NotFoundPage.module.scss';
import { useNavigate } from 'react-router-dom';
import ContentWrapper from '../../../shared/ui/contentWrapper/ContentWrapper';

const NotFoundPage: FunctionComponent = () => {
    const navigate = useNavigate();

    return (
        <div className={cls.NotFoundPage}>
            <ContentWrapper className="ContentWrapperNotFoundPage">
                <span className={cls.bigText}>404</span>
                <span className={cls.smallText}>Page not found!</span>
                <button className={cls.toHome} onClick={() => navigate('/')}>Back to main page</button>
            </ContentWrapper>
        </div>
    );
};

export default NotFoundPage;
