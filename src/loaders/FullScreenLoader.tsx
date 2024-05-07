import { ActivityIndicator, View } from 'react-native';
import { SafeArea } from '../presentation/components/SafeArea';

export const FullScreenLoader = () => {
  return (
    <SafeArea>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <ActivityIndicator
          size={'large'}
          color={'white'}
        />
      </View>
    </SafeArea>
  );
};
