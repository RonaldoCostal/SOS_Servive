import React ,{useEffect,useState}from "react";
import * as MailComposer from "expo-mail-composer";
import * as SMS from 'expo-sms';
import {Location,Position}  from 'expo';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../services/api";

export default function Home() {
  const [Services,setServices] = useState([]);
  
  //const User_id = localStorage.getItem("User_id");

  useEffect(()=>{
    api.get('Services').then(({data})=>{
      setServices(data)
    })
  },[])

 console.log(Services)

  const messag = "Porfavor me ajude";
  const { navigate } = useNavigation();

  function About() {
    navigate("About");
  }
  function home() {
    navigate("Home");
  }
 


  async function Emerg() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
  

   const { res }  = await MailComposer.composeAsync({
      subject: "Sos Service",
      recipients: ["ronaldocost071@gmail.com"],
      body: messag,
    });

    const { result } = await SMS.sendSMSAsync(
      ['0123456789', '942700122'],
      'Porfavor me ajude',
      {
        attachments: {
          uri: 'path/myfile.png',
          mimeType: 'image/png',
          filename: 'myfile.png',
        },
      }
    );
    navigate("Emerg");

    
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
        <Text style={styles.so}>Serviços de alerta para sua proteção</Text>
        <View style={styles.container2}>
       
        <TouchableOpacity style={styles.but3} onPress={Emerg}>
            <Text style={styles.sin3}>Police</Text>
          </TouchableOpacity>         
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
    height: 540,
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
  but3: {
    padding: 8,
    width: 320,
    height: 90,
    borderColor: "#4C95CC",
    borderStyle: "solid",
    borderRadius: 30,
    borderWidth: 1,
    marginTop: 30,
    marginBottom: 20,
  },
});
