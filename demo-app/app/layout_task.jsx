import { StyleSheet, Text, View } from 'react-native'

const layout_task = () => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.item}></View>
        </View>
        <View style={styles.thin_row}>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
        </View>
        <View style={styles.row}>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
        </View>
        <View style={styles.row}>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
        </View>
    </View>
  )
}

export default layout_task

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bdeffaff'
  },
  row:{
    flex: 3,
    flexDirection: 'row',
    margin: 10,
    width: '100%'
  },
  thin_row:{
    flex: 1,
    flexDirection: 'row',
    width: '100%'
  },
  item:{
    flex: 1,
    margin: 10,
    backgroundColor: '#77bed0ff',
    borderRadius: 5
  }
})