import tawkTo from "tawkto-react";

const tawkToPropertyId = '5bc2274208387933e5bb3791'

// Direct Chat Link
// https://tawk.to/chat/tawkToPropertyId/tawkToKey

const tawkToKey = '3e4278d7d0206a2680985105a5ea00ff65212ba6'

componentDidMount(){
    tawkTo(tawkToPropertyId, tawkToKey)
}