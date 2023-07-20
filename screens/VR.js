import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroPortalScene,
  ViroPortal,
  Viro3DObject,
  Viro360Image,
  Viro360Video,
  ViroAmbientLight,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';
// import * as eva from '@eva-design/eva';
// import { ApplicationProvider, Layout, Text, } from '@ui-kitten/components';

const HelloWorldSceneAR = (props) => {
  let images = props.arSceneNavigator.viroAppProps.images;

  // console.log(images)
  function onInitialized(state, reason) {
    console.log('VR_LOGS', state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
        console.log('VR_LOGS', 'TRACKING_NORMAL');
    } else if (state === ViroTrackingStateConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200}/>
      {images.map((image, index)=><ViroPortalScene key={index} passable={true} dragType="FixedDistance" onDrag={()=>{}}>
            <ViroPortal position={[.7*index, .25, -1]} scale={[.1, .1, .1]}>
              <Viro3DObject source={require('../portal_res/portal_ship/portal_ship.vrx')}
                resources={[require('../portal_res/portal_ship/portal_ship_diffuse.png'),
                            require('../portal_res/portal_ship/portal_ship_normal.png'),
                            require('../portal_res/portal_ship/portal_ship_specular.png')]}
                type="VRX"/>
            </ViroPortal>
          <Viro360Image source={{uri: image}}/>
        </ViroPortalScene>
      )}
      </ViroARScene>
  );
};


export default ({route, navigation}) => {
  return (
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR,
        }}
        viroAppProps={route.params}
        style={styles.f1}
      />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
