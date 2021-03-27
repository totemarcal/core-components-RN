import React, { useState } from "react";
import { View, Alert, ScrollView, Text, Picker, Switch, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { stringify } from "json5";

const Tela1Example = ({ navigation }) => {
    const initialFormState = {
      nome: "",
      idade: "",
      ativo: true,
      email: "",
      texto: "",
      combo: "outros"
    };

    const [form, setForm] = useState(initialFormState);

    const handleChange = (value, name) => {
        setForm({ ...form, [name]: value });
    }

    const checkData = () => {
      if((form.nome, form.idade, form.email) === "")
        return Alert.alert("Favor  preencher todos campos!");
      else
        return Alert.alert(JSON.stringify(form))
    }

    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
          <Text style={styles.title}>Nome:</Text>
          <TextInput
              style={styles.textInput}
              onChangeText={(text) => handleChange(text, "nome")}
          />
          <Text style={styles.title}>Idade:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => handleChange(text, "idade")}
              keyboardType="numeric"
          />
          <Text style={styles.title}>Email:</Text>
          <TextInput
              style={styles.textInput}
              onChangeText={(text) => handleChange(text, "email")}
              keyboardType="email-address"
          />
          <Text style={styles.title}>Sexo:</Text>
          <Picker
              selectedValue={form.combo}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => handleChange(itemValue, "combo")}
            >
              <Picker.Item label="Masculino" value="masculino" />
              <Picker.Item label="Feminino" value="feminino" />
              <Picker.Item label="Outros" value="outros" />
        </Picker>
          <Text style={styles.title}>Texto:</Text>
          <TextInput 
              multiline
              editable
              maxLength={40}
              numberOfLines={4}
              style={styles.textInputMulti}
              onChangeText={(text) => handleChange(text, "texto")}
          />

          <Text style={styles.title}>Ativo:</Text>
          <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={form.ativo ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={(toggleSwitch) => handleChange(toggleSwitch, "ativo")}
              value={form.ativo}
            />
          <TouchableOpacity
              style={styles.button}
              onPress={() => checkData()}>
              <Text>Salvar</Text>
          </TouchableOpacity>
      </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItem s: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    },
    textInput: { 
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1
    },
    textInputMulti: { 
      height: 100, 
      borderColor: 'gray', 
      borderWidth: 1
    },
    title: {
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 20
    },
    scrollView: {
      marginVertical: 60,
      marginHorizontal: 20,
    },
  });

export default Tela1Example;