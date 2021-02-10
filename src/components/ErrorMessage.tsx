import React, {FC} from 'react';
import {
    ErrorLabel,
    Root,
} from '../styled';

const ErrorMessage: FC = ({children}) => {
    return children ? (
        <Root>
            <ErrorLabel>
                {children}
            </ErrorLabel>
        </Root>
    ) : null;
};

export default ErrorMessage;
