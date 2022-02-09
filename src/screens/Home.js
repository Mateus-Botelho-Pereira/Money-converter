import React, { Component } from 'react'
import {
    AppState,
    StyleSheet,
    View,
    TextInput,
    Alert
} from 'react-native'

class Home extends Component {

    state = {
        real: '',
        dollar: '',
        euro: ''
    }

    setReal = (text) => {
        this.setState({ real: text }, () => {
            if (this.state.real === ''){
                this.clearAll()
                return
            } else {
                
            }
        })
    }

    setDollar = (text) => {
        this.setState({ dollar: text }, () => {
            if (this.state.dollar === ''){
                this.clearAll()
                return
            } else {
                
            }
        })
    }

    setEuro = (text) => {
        this.setState({ euro: text }, () => {
            if (this.state.euro === ''){
                this.clearAll()
                return
            } else {
                
            }
        })       
    }

    clearAll = () => {
        this.setState({ real: '' })
        this.setState({ dollar: '' })
        this.setState({ euro: '' })
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Reais' 
                    style={styles.input}
                    keyboardType={'numeric'}
                    placeholderTextColor={'white'}
                    value={this.state.real.toString()}
                    onChangeText={this.setReal} 
                />
                <TextInput placeholder='Dollars' 
                    style={styles.input}
                    keyboardType={'numeric'}
                    placeholderTextColor={'white'}
                    value={this.state.dollar.toString()}
                    onChangeText={this.setDollar} 
                />
                <TextInput placeholder='Euros' 
                    style={styles.input}
                    keyboardType={'numeric'}
                    placeholderTextColor={'white'}
                    value={this.state.euro.toString()}
                    onChangeText={this.setEuro} 
                />
            </View>
        )
    }
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
    },
})

export default Home