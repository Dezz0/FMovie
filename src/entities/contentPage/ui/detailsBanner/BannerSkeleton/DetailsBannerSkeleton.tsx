import { FunctionComponent } from 'react';
import cls from './DetailsBannerSkeleton.module.scss';
import ContentWrapper from 'shared/ui/contentWrapper/ContentWrapper';

const DetailsBannerSkeleton: FunctionComponent = () => {

    return (
        <div className={cls.DetailsBannerSkeleton}>
            <ContentWrapper className="ContentWrapperDetailsBanner">
                <div className={`${cls.left} skeleton`}></div>
                <div className={cls.right}>
                    <div className={`${cls.row} skeleton`}></div>
                    <div className={`${cls.row} skeleton`}></div>
                    <div className={`${cls.row} skeleton`}></div>
                    <div className={`${cls.row} skeleton`}></div>
                    <div className={`${cls.row} skeleton`}></div>
                    <div className={`${cls.row} skeleton`}></div>
                    <div className={`${cls.row} skeleton`}></div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default DetailsBannerSkeleton;
