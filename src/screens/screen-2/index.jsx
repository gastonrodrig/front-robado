import { View, Text } from 'react-native';

export const Screen2 = () => {
  return (
    <View style={{
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <View style={{
        innerWidth: '80%',
      }}>
        <Text>Screen 2</Text>
      </View>
    </View>
  )
}