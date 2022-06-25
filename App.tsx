import React from 'react';
import {Text, View} from 'react-native';
import {TailwindProvider} from 'tailwindcss-react-native';
import {tailwind} from './src/utils/tailwind';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <TailwindProvider>
      <View style={tailwind('w-full', 'bg-gray-100', 'px-3')}>
        <Text
          style={tailwind(
            'text-primary',
            'font-primary-medium',
            'text-center',
            'text-3xl',
          )}>
          Hello World...!!!
        </Text>
      </View>
    </TailwindProvider>
  );
};

export default App;
