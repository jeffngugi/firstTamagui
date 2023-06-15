import React from 'react';
import {TamaguiProvider} from 'tamagui';

import config from './tamagui.config';
import Main from './src/Main';

const App = () => {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <Main />
    </TamaguiProvider>
  );
};

export default App;
