import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Alert
} from 'react-native'

export default Home = () => {

    const [real, setReal] = useState('')
    const [dollar, setDollar] = useState('')
    const [euro, setEuro] = useState('')

    useEffect(() => {
        Alert.alert('Iniciou')
    }, [])


    functionReal = (text) => {
        setReal(text)

        if(text === ''){
            clearAll()
            return
        } else {

        }
    }

    functionDollar = (text) => {
        setDollar(text)

        if(text === ''){
            clearAll()
            return
        } else {
            
        }
    }

    functionEuro = (text) => {
        setEuro(text)

        if(text === ''){
            clearAll()
            return
        } else {
            
        }
    }

    clearAll = () => {
        setReal('')
        setDollar('')
        setEuro('')
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder='Reais' 
                style={styles.input}
                keyboardType={'numeric'}
                placeholderTextColor={'white'}
                value={real.toString()}
                onChangeText={functionReal} 
            />
            <TextInput placeholder='Dollars' 
                style={styles.input}
                keyboardType={'numeric'}
                placeholderTextColor={'white'}
                value={dollar.toString()}
                onChangeText={functionDollar} 
            />
            <TextInput placeholder='Euros' 
                style={styles.input}
                keyboardType={'numeric'}
                placeholderTextColor={'white'}
                value={euro.toString()}
                onChangeText={functionEuro} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    input: {
        color: 'white',
        borderColor: '#FAED27',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 20,
        paddingLeft: 15,
        width: '90%'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    }
})