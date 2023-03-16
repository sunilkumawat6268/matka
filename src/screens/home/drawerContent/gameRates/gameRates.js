import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, BackHandler, ImageBackground, Image } from 'react-native'
import styles from './styles'
import LottieView from 'lottie-react-native';


export default class GameRatesScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            singleDigit: "",
            jodiDigit: "",
            singlePana: "",
            doublePana: "",
            triplePana: "",
            halfSangam: "",
            fullSangam: "",
        }
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }
    backAction = () => {
        this.props.navigation.goBack()
        return true;
    };

    componentDidMount() {
        this.gameRates_04();
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
    }

    gameRates_04 = () => {
        fetch("http://13.127.179.165/api-game-rates", {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-type': "application/json",

            },
            body: JSON.stringify({
                "env_type": "1",
                app_key: global.appKey,
                unique_token: global.uniqueToken
            })
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON)
                this.setState({
                    singleDigit: responseJSON.game_rates,

                })
            })
    }


    render() {
        return (
            <SafeAreaView style={styles.mainView} >
                <ImageBackground style={styles.mainBackImg} source={require('../../../../assets/images/screen_bg.png')} >

                    <View style={styles.headerView} >
                        <View style={styles.barImgView} >
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.goBack()
                            }} >
                                <Image style={styles.barImag} source={require('../../../../assets/images/back_1.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.secondHeaderView} >
                            <View>
                                <Text style={styles.homeText} > Game Rates </Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.contactImgView} >
                        <LottieView style={styles.contactImg} source={require('../../../../assets/images/rates.json')} autoPlay loop />

                    </View>

                    <View style={styles.firstView} >

                        <View style={styles.digitView} >
                            <TouchableOpacity>
                                <View style={styles.singleDigitView}>
                                    <Text style={styles.singleDigitText} >SINGLE DIGIT</Text>
                                    <FlatList
                                        data={this.state.singleDigit}
                                        renderItem={({ item }) =>
                                            <View>
                                                <Text style={styles.singleDigitNo}>{item.single_digit_val_1} - {item.single_digit_val_2} </Text>
                                            </View>
                                        }
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.singleDigitView}>
                                    <Text style={styles.singleDigitText} >JODI DIGIT</Text>
                                    <FlatList
                                        data={this.state.singleDigit}
                                        renderItem={({ item }) =>
                                            <View>
                                                <Text style={styles.singleDigitNo}>{item.jodi_digit_val_1} - {item.jodi_digit_val_2} </Text>
                                            </View>
                                        }
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.firstView} >

                        <View style={styles.digitView} >
                            <TouchableOpacity>
                                <View style={styles.singleDigitView}>
                                    <Text style={styles.singleDigitText} >SINGLE PANA</Text>
                                    <FlatList
                                        data={this.state.singleDigit}
                                        renderItem={({ item }) =>
                                            <View>
                                                <Text style={styles.singleDigitNo}>{item.single_pana_val_1} - {item.single_pana_val_2} </Text>
                                            </View>
                                        }
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.singleDigitView}>
                                    <Text style={styles.singleDigitText} >DOUBLE PANA</Text>
                                    <FlatList
                                        data={this.state.singleDigit}
                                        renderItem={({ item }) =>
                                            <View>
                                                <Text style={styles.singleDigitNo}>{item.double_pana_val_1} - {item.double_pana_val_2} </Text>
                                            </View>
                                        }
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.digitView1} >
                            <TouchableOpacity>
                                <View style={styles.singleDigitView}>
                                    <Text style={styles.singleDigitText} >TRIPLE PANA</Text>
                                    <FlatList
                                        data={this.state.singleDigit}
                                        renderItem={({ item }) =>
                                            <View>
                                                <Text style={styles.singleDigitNo}>{item.tripple_pana_val_1} - {item.tripple_pana_val_2} </Text>
                                            </View>
                                        }
                                    />
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={styles.firstView} >

                        <View style={styles.digitView} >
                            <TouchableOpacity>
                                <View style={styles.singleDigitView}>
                                    <Text style={styles.singleDigitText} >HALF SANGAM</Text>
                                    <FlatList
                                        data={this.state.singleDigit}
                                        renderItem={({ item }) =>
                                            <View>
                                                <Text style={styles.singleDigitNo}>{item.half_sangam_val_1} - {item.half_sangam_val_2} </Text>
                                            </View>
                                        }
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.singleDigitView}>
                                    <Text style={styles.singleDigitText} >FULL SANGAM</Text>
                                    <FlatList
                                        data={this.state.singleDigit}
                                        renderItem={({ item }) =>
                                            <View>
                                                <Text style={styles.singleDigitNo}>{item.full_sangam_val_1} - {item.full_sangam_val_2} </Text>
                                            </View>
                                        }
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground>
            </SafeAreaView>
        )
    }
}