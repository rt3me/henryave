import React from 'react';
import _ from 'lodash';

import tawkTo from "tawkto-react";

export default class Tawkto extends React.Component {
    tawkToPropertyId = '5bc2274208387933e5bb3791';

    tawkToKey = '3e4278d7d0206a2680985105a5ea00ff65212ba6';

    componentDidMount(){
        tawkTo(tawkToPropertyId, tawkToKey)
    }
}