import React from 'react';
import { Alert } from 'reactstrap';

const Alerts = (props) => {
    const {
        alertVisible,
        alertText,
        alertColor,
        toggle
    } = props;

    return (
        <div>
            <Alert isOpen={alertVisible} color={alertColor} onClick={() => toggle('alertVisible')}>
                {alertText}
            </Alert>
        </div>
    );
};

export default Alerts;