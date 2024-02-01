import { FunctionComponent } from 'react';
import cls from './TotalResults.module.scss';
import { useParams } from 'react-router-dom';

interface TotalResultsProps {
    total_results?: number;
}

const TotalResults: FunctionComponent<TotalResultsProps> = ({ total_results }) => {
    const { query } = useParams();

    return (
        <div className={cls.TotalResults}>
            {`Search ${total_results! > 1 ? 'results' : 'result'} of '${query}'`}
        </div>
    );
};

export default TotalResults;
