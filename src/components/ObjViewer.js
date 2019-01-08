import React from "react";
import { Entity, Scene } from "aframe-react";
try {
    require("aframe");
    window.AFRAME.registerComponent("deallocate", {
        remove: function() {
            window.THREE.Cache.clear();
            this.el.renderer.forceContextLoss();
        }
    });
} catch (e) {
    // AFRAME CANT IMPORT - This happens during gatsby build, it's fine
}

class VRScene extends React.Component {
    render() {
        const { src, material } = this.props;
        console.log("VRScene ", this.props);
        return (
            <Scene embedded vr-mode-ui="enabled: false" deallocate>
                <Entity camera />
                <Entity light={{ type: "point" }} />
                <Entity
                    look-controls
                    obj-model={{ obj: src, mtl: material }}
                    position={{ x: 0, y: 0, z: -3 }}
                />
            </Scene>
        );
    }
}

export default VRScene;
