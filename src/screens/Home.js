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

    const [dollarQuote, setDollarQuote] = useState('')
    const [euroQuote, setEuroQuote] = useState('')

    const getInformation = async () => {
        try {
            const response = await fetch('https://api.hgbrasil.com/finance?format=json&key=08b9a390');
            const json = await response.json();

            setDollarQuote(json.results.currencies.USD.buy)
            setEuroQuote(json.results.currencies.EUR.buy)
        } catch (error) {
            console.error(error);
            Alert.alert('Error fetching data')
        }
    }
   

    useEffect(() => {
        getInformation()
    }, [])
    


    functionReal = (text) => {
        setReal(text)
        if(text === ''){
            clearAll()
            return
        }

        setDollar((text / dollarQuote).toFixed(2))
        setEuro((text / euroQuote).toFixed(2))
    }

    functionDollar = (text) => {
        setDollar(text)
        if(text === ''){
            clearAll()
            return
        }

        setReal((text * dollarQuote).toFixed(2))
        setEuro((text * dollarQuote / euroQuote).toFixed(2))
    }

    functionEuro = (text) => {
        setEuro(text)
        if(text === ''){
            clearAll()
            return
        }

        setReal((text * euroQuote).toFixed(2))
        setDollar((text * euroQuote / dollarQuote).toFixed(2))
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