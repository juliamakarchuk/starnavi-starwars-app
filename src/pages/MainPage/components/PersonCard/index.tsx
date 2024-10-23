import React, { FC } from 'react';
import { Link } from 'react-router-dom';
// Types
import { PersonsCardProps } from './types';
// Styles
import './styles.scss';

const PersonCard: FC<PersonsCardProps> = (props: PersonsCardProps) => {
    const { data } = props;
    return (
        <li className="person-card">
          <Link to="person" state={data}>
              <figure>
                  <img src={`https://starwars-visualguide.com/assets/img/characters/${data.id}.jpg`} alt={data.name} />
                  <figcaption>{data.name}</figcaption>
              </figure>
          </Link>
        </li>
    );
}

export default PersonCard;