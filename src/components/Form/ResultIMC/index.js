import React from "react";

import { View, Text } from "react-native";

export default function ResultIMC(props){
    return(

        <View>
            <Text>{props.MessageResultIMC}</Text>
            <Text>{props.ResultIMC}</Text>
        </View>
    );
}