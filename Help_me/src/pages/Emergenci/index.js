
import React from "react";
import * as SMS from 'expo-sms';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View} from 'react-native';
import{Marker}from 'react-native-maps';
import {
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Emerg() {
  const { navigate } = useNavigation();

  function About() {
    navigate("About");
  }
  function home() {
    navigate("Home");
  }
  function cancel() {
    alert("Tem serteza que deseja cancelar o seu SOS");
    navigate("Home");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.but2} onPress={home}>
            <Text style={styles.sin1}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.but2} onPress={About}>
            <Text style={styles.sin1}>About</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sos}>SOS</Text>
        <Text style={styles.so}> SOS ativos,clique em um para ajudar </Text>
        <MapView
          style={styles.container2}
          initialRegion={{
            latitude: -8.91481,
            longitude: 13.26122,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            description="Police offcer"
            coordinate={{ latitude: -8.91481, longitude: 13.2613 }}
          ></Marker>
          <Marker
            description="Police offcer"
            coordinate={{ latitude: -8.91481, longitude: 13.2616 }}
          ></Marker>
          <Marker
            description="Police offcer"
            coordinate={{ latitude: -8.91481, longitude: 13.262 }}
          ></Marker>
        </MapView>

        <TouchableOpacity style={styles.cancel} onPress={cancel}>
          <Text style={styles.sin1}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C95CC",
    alignItems: "center",
  },
  header: {
    flex: 1,
    marginTop: 20,
    width: 400,
    height: 60,
    display: "flex",
    padding: 10,
    justifyContent: "space-between",
  },
  container2: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
    width: 400,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 100,
    height: 600,
    
  },
  sos: {
    marginTop: 10,
    color: "white",
    fontSize: 110,
  },
  so: {
    color: "white",
    fontSize: 19,
  },
  icom: {
    color: "white",
    fontSize: 19,
    textAlign: "center",
  },
  but2: {
    marginTop: 5,
  },
  sin1: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  sin3: {
    color: "#4C95CC",
    textAlign: "center",
    fontSize: 50,
    justifyContent: "center",
  },
  cancel: {
    width: 320,
    padding: 10,
    backgroundColor: "red",
    borderRadius: 30,
    marginTop: 0,
    marginBottom: 20,
  },
});
