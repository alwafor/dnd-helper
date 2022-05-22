import React, {Fragment} from 'react';

interface IProps {
    children: React.ReactElement
}

export const DataBlock: React.FC<IProps> = ({children}) => {
    return <Fragment>
        {children}
        <hr/>
    </Fragment>
};