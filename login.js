import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { auth } from "./firebase";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Oops! ❤️", "Please enter your email and password to join your love story.");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("Welcome Back! 💕", "You're logged in. Let's keep the love flowing.");
      })
      .catch(error => {
        Alert.alert("Something's wrong 💔", error.message);
      });
  };

  const handleRegister = () => {
    if (!email || !password) {
      Alert.alert("Hey love! 💌", "Please fill both email and password to start your journey.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("You’re in! 🌹", "Welcome to your private love space.");
      })
      .catch(error => {
        Alert.alert("Oops! 💔", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shranjay 💖</Text>
      <Text style={styles.subtitle}>
        Connect, share & cherish moments with <Text style={{ fontWeight: "bold", color: "#d72631" }}>Shraddha</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="💌 Your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#ffccd5"
      />
      <TextInput
        style={styles.input}
        placeholder="🔒 Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#ffccd5"
      />
      <View style={styles.buttonContainer}>
        <Button color="#ff6f91" title="Login" onPress={handleLogin} />
      </View>
      <View style={styles.buttonContainer}>
        <Button color="#f67280" title="Register" onPress={handleRegister} />
      </View>
      <Text style={styles.footer}>Made with ❤️ for Shraddha & you</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6e9",
    padding: 25,
    justifyContent: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#d72631",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    color: "#ff6f91",
    fontSize: 16,
    marginBottom: 30,
    fontStyle: "italic",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ff6f91",
    borderRadius: 30,
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff0f5",
    fontSize: 16,
    color: "#d72631",
  },
  buttonContainer: {
    marginVertical: 8,
    borderRadius: 30,
    overflow: "hidden",
  },
  footer: {
    marginTop: 40,
    textAlign: "center",
    color: "#d72631",
    fontWeight: "600",
  },
});
