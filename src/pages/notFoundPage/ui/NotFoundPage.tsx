import { FunctionComponent } from 'react';
import { ContentWrapper } from '../../../shared/ui/contentWrapper';
import cls from './NotFoundPage.module.scss';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: FunctionComponent = () => {
    const navigate = useNavigate();

    return (
        <div className={cls.NotFoundPage}>
            <ContentWrapper className="ContentWrapperNotFoundPage">
                <span className={cls.bigText}>404</span>
                <span className={cls.smallText}>Page not found!</span>
                <button className={cls.toHome} onClick={() => navigate('/')}>Back to home</button>
            </ContentWrapper>
        </div>
    );
};

export default NotFoundPage;
