import { StyleSheet, Text, View } from "react-native";

const box = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={styles.greenBox}></View>
    </View>
  );
};

export default box;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
  },
  box: {
    // width: '100%',
    height: 100,
    backgroundColor: "#fb9a9ad3",
    flex: 2,
    // marginBottom: 10
  },
  greenBox: {
    // width: '100%',
    height: 100,
    backgroundColor: "#6eb758ff",
    flex: 1
  },
});
