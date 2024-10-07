import { View, Text } from 'react-native';

export const Screen3 = () => {
  return (
    <View style={{
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <View style={{
        innerWidth: '80%',
      }}>
        <Text>Screen 3</Text>
      </View>
    </View>
  )
}