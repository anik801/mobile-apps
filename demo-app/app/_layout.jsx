import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const _layout = () => {
  return (
    <Stack screenOptions={{
        // Optional styling
        headerStyle: {backgroundColor: '#ddd'},
        headerTintColor: '#232323ff',
        headerTitleStyle: {fontWeight:'bold'}
    }}>
        {/* The following are optional */}
        <Stack.Screen name='index' options={{headerShown: false}} />
        <Stack.Screen name='second' options={{title:'Second Screen'}} />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})