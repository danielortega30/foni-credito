import { Avatar, Button, Card, Text, TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";

import React from "react";
import { Texts } from "@/constants/Messages";
import { useLogin } from "@/hooks/useLogin";

const LoginScreen = () => {
  const {
    email,
    password,
    showPassword,
    emailError,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
    setShowPassword,
    onPressLogin,
  } = useLogin();

  return (
    <View style={styles.container}>
      <Text variant="displaySmall">{Texts.loginTitle}</Text>
      <Text variant="headlineSmall">{Texts.loginSubtitle}</Text>
      <View style={styles.formContainer}>
        <TextInput
          label={Texts.loginEmail}
          value={email}
          onChangeText={handleEmailChange}
          error={!!emailError}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <TextInput
          label={Texts.loginPassword}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={handlePasswordChange}
          error={!!passwordError}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}

        <Button icon="login" mode="contained" onPress={onPressLogin}>
          {Texts.login}
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    paddingHorizontal: 30,
  },
  formContainer: {
    marginTop: 30,
    rowGap: 30,
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
});

export default LoginScreen;
