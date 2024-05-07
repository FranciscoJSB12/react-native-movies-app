import { ReactNode } from 'react';
import { View, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  children: ReactNode;
}

export const SafeArea = ({ children }: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top, flex: 1 }}>
      <ImageBackground
        source={require('../../../assets/movie-bg.jpg')}
        resizeMode={'cover'}
        style={{ flex: 1 }}
      >
        {children}
      </ImageBackground>
    </View>
  );
};
