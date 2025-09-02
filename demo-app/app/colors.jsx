import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const colors = () => {
  return (
    <SafeAreaView>
      <Text style={styles.redText}>Red Text</Text>
      <Text style={styles.greenText}>Green Text</Text>
      <Text style={styles.blueText}>Blue Text</Text>
    </SafeAreaView>
  );
};

export default colors;

const styles = StyleSheet.create({
  redText: {
    color: "red",
    fontSize: 36
  },
  greenText: {
    color: "green",
  },
  blueText: {
    color: "blue",
  },
});
