import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Demo App</Text>

      <Text style={styles.subTitle}>List of Screens</Text>
      <Link href={"/second"} style={styles.link}>
        Click To Show Second Screen
      </Link>
      <Link href={"/colors"} style={styles.link}>
        Colors
      </Link>
      <Link href={"/box"} style={styles.link}>
        Box Screen
      </Link>
      <Link href={"/layout_task"} style={styles.link}>
        Layout Task
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: "10%",
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    width: '80%',
    marginBottom: 10
  },
  link: {
    fontSize: 20,
    color: "blue",
  },
});
