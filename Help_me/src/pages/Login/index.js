import React,{useState,localStorage} from "react";
  import { useNavigation } from "@react-navigation/native";
  import api from "../services/api";
  
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";



export default function Login() {
  const { navigate } = useNavigation();
  const [name, SetName] = useState("");
  const [senha, Setsenha] = useState("");

  async function log(e) {
    e.preventDefault();
    const data = {
      name,
      senha
    }

    
    try { 
     const res = await api.post("LogMob", data );
      localStorage.setItem("User_id", res.data.id);
      console.log(res,"LLLLL")
      alert(`Welcome : ${res.data.id}`);
      navigate("Home");
    } catch (error) {
      alert(`Login invalido`);
    }
  }
  

  function Newuser() {
    navigate("NUser");
  }


 async function LogOficer(e){
    e.preventDefault();
    const data = {
      name,
      senha
    }
    navigate("Emerg");
 /* try { 
    const res = await api.post("LogMob", data );
     localStorage.setItem("User_id", res.id);
     alert(`Welcome : ${res.data.id}`);
     navigate("Emerg");
   } catch (error) {
     alert(`Login invalido`);
     console.log("onn")
   }*/
 }
 
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.sos}>SOS</Text>
        <Text style={styles.so}>Serviços de alerta para sua proteção</Text>
        <View style={styles.container2}>
          <Text style={styles.s}>Bem vindo !</Text>
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
              placeholder="Digite suasenha"
              placeholderTextColor="#818081"
              KeyboardType="password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              value={senha}
              onChangeText={(e)=>Setsenha(e)}
            />
            <TouchableOpacity style={styles.but} onPress={log}>
              <Text style={styles.sin}>Iniciar</Text>
            </TouchableOpacity>
            <Text style={styles.or}>ou</Text>
            <TouchableOpacity style={styles.but1} onPress={LogOficer}>
              <Text style={styles.sin1}>Iniciar como ofice</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.but2} onPress={Newuser}>
              <Text style={styles.sin1}>Nova conta!</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  container2: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
    width: 400,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 20,
    height: 550,
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
    color: "black",
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
    backgroundColor: "#4C95CC",
    borderRadius: 30,
    margin: 10,
    marginTop: 20,
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
  but2: {
    marginTop: -2,
  },
});
