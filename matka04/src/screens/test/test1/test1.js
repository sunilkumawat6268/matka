import React, { Component } from 'react'
import { Text, View, Image, SafeAreaView } from 'react-native'
import styles from './styles';

export default class Test1Screen extends Component {
    render() {
        const { uri } = this.props.route.params;

        return (
            <SafeAreaView style={styles.mainView} >
                <View style={styles.firstView} >
                    {/* <Text> {uri} </Text> */}
                    <Image style={styles.img} source={{ uri: uri }} />
                </View>
            </SafeAreaView>
        )
    }
}