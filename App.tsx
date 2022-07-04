import React from 'react';
import {View, NativeModules, Button} from 'react-native';
const {MssOrchestration, Orchestrator} = NativeModules;

const NewModuleButton = () => {
  const onPress = async () => {
    const moduleName = await MssOrchestration.UserAuthenticationDialogFragment;
    const m2 = await Orchestrator;
    console.log({moduleName, m2});
  };

  const URLBaseexample =
    'https://jorgeaguilardemos-gm.sdb.tid.onespan.cloud/v1/';
  const vorURL = 'https://sybrandreinders-vort.sdb.tid.onespan.cloud/riskui';

  const vortigo = {
    url: 'https://sybrandreinders-vort.sdb.tid.onespan.cloud',
    user: 'SYBRANDREINDERS-VORT-DB',
    passwor: 'Ga7fQhPEEgw59cftCJQu',
  };
  const Dominio = 'jorgeaguilardemos-gm';
  const user = 'sybrand.reinders@vortigo.com.br';
  const password = 'Vort2022';
  const url = 'https://community.onespan.com/';

  const usrBase = '';
  const domain = '';

  const entryPoint = `${usrBase}/users/${user}@${domain}`;

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
