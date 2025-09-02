import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const second = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Second Screen</Text>

      <Link href={'/'} style={styles.link}>Click To Show Home Screen</Link>
    </View>
  )
}

export default second

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontSize: 36
  },
  link:{
    fontSize: 24,
    color: 'red'
  }
})
