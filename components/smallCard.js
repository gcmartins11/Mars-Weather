import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ImageBackground
} from 'react-native';

export default class smallCard extends Component {

    render() {
        let min = (this.props.min -32) * 5 / 9 
        let avg = (this.props.avg -32) * 5 / 9
        let max = (this.props.max -32) * 5 / 9

        return (
            <View style={styles.card}>
                <View style={styles.left}>
                    <Text style={{color: '#fff', fontWeight: '400', fontSize: 25}}>SOL</Text>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 25}}> {this.props.sol} </Text>
                </View>
                <View style={styles.right}> 
                    <Text style={styles.temperatures}>Min: {min.toFixed(2)} C°</Text>
                    <Text style={styles.temperatures}>Avg: {avg.toFixed(2)} C°</Text>
                    <Text style={styles.temperatures}>Max: {max.toFixed(2)} C°</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#000',
        opacity: .8,
        width: '100%',
        height: 125,
        marginBottom: 20,
    },
    left: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    right: {
        padding: 10,
        width: '60%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    temperatures: {
        color: '#fff',
        fontSize: 20,
    }

})