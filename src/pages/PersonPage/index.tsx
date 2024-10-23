import React, { FC } from 'react';
import { Link } from 'react-router-dom';
// Components
import withPersonEvents from './hoc/withPersonEvents';
import PersonInfoGraph from './components/PersonInfoGraph';
import Loader from '../../components/Loader';
// Types
import { PersonPageProps } from './types';
// Styles
import '@xyflow/react/dist/style.css';
import './styles.scss';
import ErrorMessage from "../../components/ErrorMessage";

const PersonPage: FC<PersonPageProps> = (props: PersonPageProps) => {
    const {
        isLoading,
        error,
        layoutNodes,
        layoutEdges,
    } = props;

    return (
        <div className="person-page">
            { isLoading && <Loader/> }
            { error && <ErrorMessage message={error}/> }
            {
                !isLoading &&
                    <>
                      <div className="navigation-block">
                         <Link className="navigation-block-link" to="/">Go to heroes list</Link>
                      </div>
                      <PersonInfoGraph
                         layoutNodes={layoutNodes}
                         layoutEdges={layoutEdges}
                      />
                    </>
            }
        </div>
    );
};

export default withPersonEvents(PersonPage);