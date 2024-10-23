import React, { FC } from 'react';
// Types
import { ErrorMessageProps } from './types';
// Styles
import './styles.scss';

const ErrorMessage:FC<ErrorMessageProps> = ({ message }: ErrorMessageProps) => {
    return (
        <div className="error-message">
            <p>Something went wrong:</p>
            <pre>{message}</pre>
        </div>
    )
}

export default ErrorMessage;