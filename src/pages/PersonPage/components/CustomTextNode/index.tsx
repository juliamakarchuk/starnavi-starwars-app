import React, { FC } from 'react';
import { Handle, Position } from '@xyflow/react';
// Types
import { CustomTextNodeProps } from './types';
// Styles
import './styles.scss';

// creating custom node - to show user a little more information
const CustomTextNode: FC<CustomTextNodeProps> = (props: CustomTextNodeProps) => {
    const {
      data: { label, title }
    } = props;

    return (
        <div className="text-node">
            <Handle type="target" position={Position.Top} />
            <div className="text-node-content">
                <label htmlFor="text" className="text-label">{ label }:</label>
                <br/>
                <span>{title}</span>
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
        </div>
    );
}

export default CustomTextNode;