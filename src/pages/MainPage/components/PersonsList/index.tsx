import React, { FC } from 'react';
// Components
import PersonCard from '../PersonCard';
// Types
import { PersonsListProps } from './types';
// Styles
import './styles.scss';

const PersonsList:FC<PersonsListProps> = (props: PersonsListProps) => {
    const { data } = props;
    return (
        <ul className="persons-list">
            {
               data.map((p:any) => <PersonCard key={p.id} data={p} />)
            }
        </ul>
    );
}

export default PersonsList;