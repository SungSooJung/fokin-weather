import React from "react";
import {View,Text,StyleSheet} from "react-native";
import PropTypes from "prop-types";

export default function Weather({temp,condition}){
    return (
    <View style={styles.container}>
        <Text >{temp},
            {condition}
        </Text>
    </View>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(
        [
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist"
        ]
    ).isRequired
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})