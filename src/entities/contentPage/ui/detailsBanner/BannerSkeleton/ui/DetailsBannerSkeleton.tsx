import { FunctionComponent } from 'react';
import { ContentWrapper } from '../../../../../../shared/ui/contentWrapper';
import './DetailsBannerSkeleton.scss';

const DetailsBannerSkeleton: FunctionComponent = () => {

    return (
        <div className="DetailsBannerSkeleton">
            <ContentWrapper className="ContentWrapperDetailsBanner">
                <div className="left skeleton"></div>
                <div className="right">
                    <div className="row skeleton"></div>
                    <div className="row skeleton"></div>
                    <div className="row skeleton"></div>
                    <div className="row skeleton"></div>
                    <div className="row skeleton"></div>
                    <div className="row skeleton"></div>
                    <div className="row skeleton"></div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default DetailsBannerSkeleton;