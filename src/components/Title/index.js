import React from "react";

import {StyleSheet, View, Text } from "react-native";

export default function Title(){
    return(
        <View style={styles.container}>
            <Text>Projeto: Calculadora IMC - React Native 1.0</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
    },
  });