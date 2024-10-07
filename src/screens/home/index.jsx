import { View, Text, TouchableOpacity } from 'react-native';

export const Home = ({ navigation }) => {
  return (
    <View style={{
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <View style={{
        innerWidth: '80%',
      }}>
        <TouchableOpacity
          onPress={() => {navigation.navigate('Screen1')}}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 2,
            backgroundColor: 'blue',
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1
        }}> 
          <Text style={{ color: 'white' }}>
            Ir a screen 1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {navigation.navigate('Screen2')}}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 2,
            backgroundColor: 'blue',
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1
        }}> 
          <Text style={{ color: 'white' }}>
            Ir a screen 2
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {navigation.navigate('Screen3')}}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 2,
            backgroundColor: 'blue',
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1
        }}> 
          <Text style={{ color: 'white' }}>
            Ir a screen 3
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}