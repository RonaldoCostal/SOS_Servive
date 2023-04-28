import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import api from "../services/api";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ThemeProvider, useNavigation } from "@react-navigation/native";

export default function NUser() {

  const [name, SetName] =React.useState("");
  const [email, SetEmail] = React.useState("");
  const [contact, SetContact] = React.useState("");
  const [senha, Setsenha] = React.useState("");
  const [confirm_senha, Setconfirm_senha] =React.useState("");
  const [funcao, Setfuncao] =React.useState("");
  const [sexo, Setsexo] = React.useState("");

  const { navigate } = useNavigation()

 async function Save(e) {
  e.preventDefault();
    const data = {
      name,
      email,
      contact,
      senha,
      confirm_senha,
      funcao,
      sexo
    };

    try{
        const res = await api.post("Usermob",data)
        console.log(data)
        alert(`Cadastrando : ${res.data.name}`);
        navigate("Login")
    } catch (erro) {
      alert(`Falha ao cadastrar tente novamente`);
    }
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.sos}>SOS</Text>
        <Text style={styles.so}>Serviços de alerta para sua proteção</Text>
        <View style={styles.container2}>
          <Text style={styles.s}>Cadastrar!</Text>
          <View style={styles.Form}>
            <Text style={styles.sa}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              placeholderTextColor="#818081"
              KeyboardType="name"
              autoCapitalize="none"
              autoCorrect={false}
              value={name}
              onChangeText={(e) => SetName(e)}
            />
            <Text style={styles.sa}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#818081"
              KeyboardType="password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              value={senha}
              onChangeText={(e)=>Setsenha(e)}
            />
            <Text style={styles.sa}>Confirmar senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirmar senha"
              placeholderTextColor="#818081"
              KeyboardType="password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              value={confirm_senha}
              onChangeText={(e)=>Setconfirm_senha(e)}
            />
            <Text style={styles.sa}> Endereçe Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu Email"
              placeholderTextColor="#818081"
              KeyboardType="name"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={(e) => SetEmail(e)}
            />
            <Text style={styles.sa}>Sexo</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu sexo"
              placeholderTextColor="#818081"
              KeyboardType="name"
              autoCapitalize="none"
              autoCorrect={false}
              value={sexo}
              onChangeText={(e) => Setsexo(e)}
            />
              <Text style={styles.sa}>Função</Text>
              <TextInput
              style={styles.input}
              placeholder="Digite seu Função"
              placeholderTextColor="#818081"
              KeyboardType="name"
              autoCapitalize="none"
              autoCorrect={false}
              value={funcao}
              onChangeText={(e) => Setfuncao(e)}
            />
              <Text style={styles.sa}>Contacto</Text>
              <TextInput
              style={styles.input}
              placeholder="Digite seu Contacto"
              placeholderTextColor="#818081"
              KeyboardType="name"
              autoCapitalize="none"
              autoCorrect={false}
              value={contact}
              onChangeText={(e) => SetContact(e)}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.but} onPress={Save}>
              <Text style={styles.sin}>Save</Text>
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
    marginBottom: 10,
  },
  container2: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
    width: 400,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 100,
    height: 660,
  },
  sos: {
    marginTop: 30,
    color: "white",
    fontSize: 110,
  },
  so: {
    color: "white",
    fontSize: 19,
  },
  sa: {
    color: "#4C95CC",
    fontSize: 19,
  },
  s: {
    marginTop: 5,
    color: "#4C95CC",
    fontSize: 40,
  },
  sin: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    padding: 5,
  },
  sin1: {
    color: "#4C95CC",
    textAlign: "center",
    fontSize: 20,
  },
  or: {
    color: "#818081",
    textAlign: "center",
  },
  or1: {
    color: "#4C95CC",
    textAlign: "center",
    fontSize: 19,
  },
  or2: {
    color: "#818081",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#4C95CC",
    width: 50,
    height: 30,
  },
  Form: {
    flex: 1,
    
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#818081",
    padding: 5,
    width: 100,
    marginTop: 7,
    marginBottom: 10,
    height: 40,
    width: 330,
    color: "#818081",
  },
  but: {
    padding: 8,
    width: 320,
    backgroundColor: "red",
    borderRadius: 30,
   marginTop:-70,
   marginBottom:2,
  },

  but1: {
    padding: 8,
    width: 320,
    borderColor: "#818081",
    borderStyle: "solid",
    borderRadius: 30,
    borderWidth: 1,
    margin: 10,
    marginBottom: 20,
  },
});
