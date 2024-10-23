import React, { FunctionComponent } from 'react';
// Components
import Pagination from '../../components/Pagination';
import Loader from '../../components/Loader';
import PersonsList from './components/PersonsList';
import withPersonsEvents from './hoc/withPersonsEvents';
import ErrorMessage from '../../components/ErrorMessage';
// Types
import { MainPageProps } from './types';
// Styles
import './styles.scss';

const MainPage: FunctionComponent<MainPageProps> = (props: MainPageProps) => {
    const {
        data,
        paginationData,
        setPaginationData,
        isLoading,
        error
    } = props;

    const handlePageClick = (page: { selected: number }) => {
        setPaginationData({
            ...paginationData,
            pageNumber: page.selected
        })
    };

    return (
        <div className="main-wrapper container">
            <div className="main-content">
                { isLoading && <Loader/> }
                { error && <ErrorMessage message={error} /> }
                { !isLoading &&
                  <>
                    {paginationData.totalPages > 1 && (
                        <Pagination
                            totalPages={paginationData.totalPages}
                            pageNumber={paginationData.pageNumber}
                            handlePageClick={handlePageClick}
                        />
                    )}
                    <PersonsList data={data} />
                  </>
                }
            </div>
        </div>

    );
}

export default withPersonsEvents(MainPage);
