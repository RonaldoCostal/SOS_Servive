import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.sos}>SOS</Text>
      <Text style={styles.sso}>Verson: 1.0.0</Text>
      <Text style={styles.so}>By Urben</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C95CC",
    alignItems: "center",
    justifyContent: "center",
  },

  sos: {
    marginTop: 20,
    color: "white",
    fontSize: 160,
  },
  so: {
    color: "white",
    fontSize: 19,
    marginTop: 150,
  },
  sso: {
    color: "white",
    fontSize: 19,
    marginTop: 10,
    marginBottom: 100,
    marginTop: 60,
  },
});
