import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../theme/appTheme';
import { ButtonCalc } from '../components';
import { useCalculator } from '../hooks/useCalculator';


export const CalculatorScreens = () => {
    
    
    const { 
        number,
        lastNumber,
        clean,
        buildNumber,
        positiveNegative,
        buttonDelete,
        ButtonDivide,
        ButtonMultiply,
        ButtonSubtract,
        ButtonAdd,
        calc, } = useCalculator()


    return (
        <View style={ theme.container }>
            
            {/* Result */}
            
            <Text style={ theme.lastResult }>{ lastNumber !== "0" && lastNumber }</Text>
            <Text 
                style={ theme.result } 
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >
                  { number }
            </Text>

            {/* Row Buttons */}  
            <View style={ theme.row }>
                <ButtonCalc color="#9b9b9b" text="C" actionButton={ clean } />
                <ButtonCalc color="#9b9b9b" text="+/-" actionButton={ positiveNegative }  />
                <ButtonCalc color="#9b9b9b" text="del" actionButton={ buttonDelete }  />
                <ButtonCalc color="#ff9427" text="/" actionButton={ ButtonDivide }  />
            </View>
            <View style={ theme.row }>
                <ButtonCalc text="7" actionButton={ buildNumber } />
                <ButtonCalc text="8" actionButton={ buildNumber }/>
                <ButtonCalc text="9" actionButton={ buildNumber }/>
                <ButtonCalc color="#ff9427" text="X" actionButton={ ButtonMultiply } />
            </View>
            <View style={ theme.row }>
                <ButtonCalc text="4" actionButton={ buildNumber }/>
                <ButtonCalc text="5" actionButton={ buildNumber }/>
                <ButtonCalc text="6" actionButton={ buildNumber } />
                <ButtonCalc color="#ff9427" text="-" actionButton={ ButtonSubtract }  />
            </View>
            <View style={ theme.row }>
                <ButtonCalc text="1" actionButton={ buildNumber } />
                <ButtonCalc text="2" actionButton={ buildNumber } />
                <ButtonCalc text="3" actionButton={ buildNumber }  />
                <ButtonCalc color="#ff9427" text="+" actionButton={ ButtonAdd } />
            </View>
            <View style={ theme.row }>
                <ButtonCalc text="0" actionButton={ buildNumber }  width />
                <ButtonCalc text="." actionButton={ buildNumber } />
                <ButtonCalc color="#ff9427" text="=" actionButton={ calc }/>
            </View>

        </View>
    )
}

