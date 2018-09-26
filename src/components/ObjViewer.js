import React from 'react'
import { Entity, Scene } from 'aframe-react';
try {
    require("aframe");
} catch (e) {
    // AFRAME CANT IMPORT - This happens during gatsby build, it's fine
}

class VRScene extends React.Component {
    render() {
        const { src } = this.props;
        return (
            <Scene embedded vr-mode-ui="enabled: false">
                <Entity light={{ type: 'point' }} />
                <Entity obj-model={{ obj: src }} material={{ color: 'blue' }} position={{ x: 0, y: 1.5, z: -5 }} />
            </Scene>
        );
    }
}

export default VRScene;
