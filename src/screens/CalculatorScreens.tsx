import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../theme/appTheme';
import { ButtonCalc } from '../components';

export const CalculatorScreens = () => {
    return (
        <View style={ theme.container }>
            
            {/* Result */}
            
            <Text style={ theme.lastResult }>1,500.00</Text>
            <Text style={ theme.result } >1,500.00</Text>

            {/* Row Buttons */}  
            <View style={ theme.row }>
                <ButtonCalc color="#9b9b9b" text="C" />
                <ButtonCalc color="#9b9b9b" text="+/-"/>
                <ButtonCalc color="#9b9b9b" text="del"/>
                <ButtonCalc color="#ff9427" text="/"/>
            </View>
            <View style={ theme.row }>
                <ButtonCalc text="7" />
                <ButtonCalc text="8"/>
                <ButtonCalc text="9"/>
                <ButtonCalc color="#ff9427" text="X"/>
            </View>
            <View style={ theme.row }>
                <ButtonCalc text="4"/>
                <ButtonCalc text="5"/>
                <ButtonCalc text="6" />
                <ButtonCalc color="#ff9427" text="-"/>
            </View>
            <View style={ theme.row }>
                <ButtonCalc text="1"/>
                <ButtonCalc text="2"/>
                <ButtonCalc text="3" />
                <ButtonCalc color="#ff9427" text="+"/>
            </View>
            <View style={ theme.row }>
                <ButtonCalc text="0" width />
                <ButtonCalc text="2"/>
                <ButtonCalc color="#ff9427" text="="/>
            </View>

        </View>
    )
}

