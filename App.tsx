import React from 'react';
import {View, NativeModules, Button} from 'react-native';
const {MssOrchestration, Orchestrator} = NativeModules;

const NewModuleButton = () => {
  const onPress = async () => {
    const moduleName = await MssOrchestration;
    const m2 = await Orchestrator;
    console.log({moduleName, m2});
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
    </View>
  );
};

export default NewModuleButton;
