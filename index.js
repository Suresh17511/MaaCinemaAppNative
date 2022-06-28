import StorybookUI from './storybook';
import Config from 'react-native-config';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () =>
  Config.LOAD_STORYBOOK === 'true' ? StorybookUI : App,
);
