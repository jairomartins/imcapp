import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultIMC from "./ResultIMC";

export default function Form (){

    const [IMC, setIMC] = useState(null);
    const [MessageResultIMC, setMessageResultIMC] = useState(null);
    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [textButton, setTextButton] = useState("Calcular IMC");

    function calcularIMC(){
        return (setIMC((peso/(altura*altura)).toFixed(2)));
    }

    function validaIMC(){
        if(peso !=null && altura !=null){
            calcularIMC();
            setPeso(null);
            setAltura(null);
            setMessageResultIMC("Seu IMC é Igual:");
            setTextButton("Calcular Novamente");
            return
        }
        setIMC(null);
        setTextButton("calcular");
        setMessageResultIMC("Preencha o peso e a altura!")
    }

    return(
        <View>
            <View>
                <Text>Altura :</Text>
                <TextInput
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />
                <Text>Peso (KG) :</Text>
                <TextInput
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex. 75.300"
                    keyboardType="numeric"
                />
                <Button
                    onPress={()=>{validaIMC()}}
                    title={textButton}
                />
            </View>
            <ResultIMC ResultIMC={IMC} MessageResultIMC={MessageResultIMC}/>
        </View>
    );
}