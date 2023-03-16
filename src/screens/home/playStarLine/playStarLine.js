import React, { Component } from 'react'
import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity, ImageBackground, Vibration, BackHandler } from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';

export default class PlayStarLineScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rate: [],
            list: [],
            isLoading: false
        }
    }

    backAction = () => {
        this.props.navigation.goBack()
        return true;
    };


    componentWillUnmount() {
        this.willBlurListener();
        this.backHandler.remove();
    }

    componentDidMount() {
        this.willBlurListener = this.props.navigation.addListener('focus', () => {
            this.gameList_04();
            this.gameRates_04();
            // this.wallet_Balance();
        })

        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );

    }

    gameRates_04 = async () => {
        try {
            fetch("http://13.127.179.165/api-starline-game-rates", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-type": 'application/json',
                },
                body: JSON.stringify({
                    "env_type": "1",
                    "app_key": global.appKey,
                    unique_token: global.uniqueToken
                })
            })
                .then((response) => response.json())
                .then((responseJSON) => {
                    // console.log(responseJSON)
                    this.setState({
                        rate: responseJSON.game_rates
                    })

                })

        } catch (error) {
            console.log("error", error);
        }
    };

    gameList_04 = async () => {

        this.setState({ isLoading: true })

        try {
            fetch("http://13.127.179.165/api-starline-game", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    "env_type": "1",
                    "app_key": global.appKey,
                    unique_token: global.uniqueToken
                })
            })
                .then((response) => response.json())
                .then((responseJSON) => {
                    console.log(responseJSON.web_starline_chart_url)
                    global.webView = responseJSON.web_starline_chart_url
                    this.setState({
                        list: responseJSON.result

                    })
                })
                .finally(() => this.setState({ isLoading: false }))

        } catch (error) {
            console.log("error", error);
        }
    };

    bounce = () => {
        // alert("hello")
        Vibration.vibrate()
        // this.view.shake()
    }
    render() {
        return (
            <SafeAreaView style={styles.mainView} >
                <ImageBackground style={styles.mainBackImg} source={require('../../../assets/images/screen_bg.png')} >


                    <View style={styles.headerView} >
                        <View style={styles.barImgView} >
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.goBack()
                            }} >
                                <Image style={styles.barImag} source={require('../../../assets/images/back_1.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.secondHeaderView} >
                            <View>
                                <Text style={styles.homeText} > Star Line </Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.subMainView} >
                        <Text style={styles.gameRatesHeading} >Game Rates</Text>

                        <View style={styles.dataView} >
                            <FlatList
                                data={this.state.rate}
                                renderItem={({ item }) =>
                                    <View style={styles.flatListDataView} >

                                        <View style={styles.dataTextView} >
                                            <Text style={styles.singleDigit} >Single Digit :-</Text>
                                            <Text style={styles.dataText} >{item.single_digit_val_1} - {item.single_digit_val_2}</Text>
                                        </View>

                                        <View style={styles.dataTextView} >
                                            <Text style={styles.singleDigit} >Single Pana :-</Text>
                                            <Text style={styles.dataText} >{item.single_pana_val_1} - {item.single_pana_val_2}</Text>
                                        </View>
                                        <View style={styles.dataTextView} >
                                            <Text style={styles.singleDigit} >Double Pana :-</Text>
                                            <Text style={styles.dataText} >{item.double_pana_val_1} - {item.double_pana_val_2}</Text>
                                        </View>
                                        <View style={styles.dataTextView} >
                                            <Text style={styles.singleDigit} >Triple Pana :-</Text>
                                            <Text style={styles.dataText} >{item.tripple_pana_val_1} - {item.tripple_pana_val_2}</Text>
                                        </View>


                                    </View>
                                }
                            />
                        </View>

                        <View style={styles.btnView} >
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('playBidHistory')
                            }} >
                                <Image style={styles.play_history} source={require('../../../assets/images/play_history.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('playWinHistory')
                            }} >
                                <Image style={styles.play_history} source={require('../../../assets/images/win.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('chart')
                            }} >
                                <Image style={styles.play_history} source={require('../../../assets/images/chart.png')} />
                            </TouchableOpacity>

                        </View>
                    </View>


                    <FlatList
                        data={this.state.list}
                        refreshing={this.state.isLoading}
                        onRefresh={this.gameList_04}
                        renderItem={({ item }) =>

                            <View style={styles.headFlateListView} >
                                <View style={styles.mainFlatListView} >
                                    <TouchableOpacity
                                        onPress={
                                            (item.msg_status === 2) ? this.bounce : () => {
                                                this.props.navigation.navigate('playStarGame', {
                                                    time: item.game_name,
                                                    item,
                                                })
                                            }}
                                    >

                                        <View style={styles.firstFlatListView} >
                                            <View style={styles.flatListWhiteView} >

                                                <View style={styles.gameNameView} >
                                                    <Text style={styles.gameName} >{item.game_name} </Text>
                                                    {/* <Text style={styles.gameName} >00:00:00</Text> */}



                                                </View>

                                                <View style={styles.secondYellowView} >

                                                    <View style={styles.subSecondView} >

                                                        <View>
                                                            <ImageBackground style={styles.hangingImg} source={require('../../../assets/images/hanging_board.png')} >
                                                                <Text style={[
                                                                    (item.msg_status === 1) ? styles.marketOpen : styles.marketClose]} >{item.msg} </Text>
                                                            </ImageBackground>
                                                        </View>

                                                        <View style={styles.middleView} >
                                                            <Text style={styles.gameNo} >{[item.open_result, (item.open_result === "") ? "XXX-X" : ""]}</Text>

                                                        </View>

                                                        <View>
                                                            {/* <Image style={styles.playBtn} source={require('../../../assets/images/play_btn.png')} /> */}
                                                            <Image style={styles.playBtn} source={(item.msg_status === 1) ? require('../../../assets/images/play_btn.png') : require('../../../assets/images/pause_btn.png')} />

                                                        </View>

                                                    </View>

                                                </View>

                                            </View>
                                        </View>

                                    </TouchableOpacity>
                                </View>

                            </View>

                        }
                    />



                </ImageBackground>
            </SafeAreaView>
        )
    }
}