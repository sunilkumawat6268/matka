import React, { Component } from 'react';
import { Text, View, Button, Platform, BackHandler, SafeAreaView, TouchableOpacity, Image, FlatList, ToastAndroid, ImageBackground } from 'react-native';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import LottieView from 'lottie-react-native';



export default class BidHistoryScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            mode: 'date',
            show: false,
            text: '',
            historyData: [],
            latestDate: "",
            endDate: new Date(),
            endMode: 'date',
            endShow: false,
            todayDate: "",
            isLoading: false,


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
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        this.setState({
            text: date + "-" + month + "-" + year,
            todayDate: date + "-" + month + "-" + year,
            latestDate: date + "-" + month + "-" + year
        })
        this.todayBidHistoryData();
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );


    }

    todayBidHistoryData = () => {
        fetch('http://13.127.179.165/api-bid-history-data', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "env_type": "1",
                "app_key": global.appKey,
                "unique_token": global.uniqueToken,
                "bid_from": this.state.latestDate,
                "bid_to": this.state.latestDate
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                this.setState({
                    historyData: responseJson.bid_data
                })
                if (!responseJson.msg) {
                    ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT)
                }
            })
            .catch((error) => {
                alert('error' + error);
            })
    }

    onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        this.setState({
            show: Platform.OS === 'ios',
            date: currentDate
        })

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getFullYear();
        this.setState({
            text: fDate,
        })
        console.log(fDate)
    }

    showMode = (currentMode) => {
        this.setState({
            show: true,
            mode: currentMode
        })

    }

    endDatePicker = (event, selectedDate) => {
        const currentDate = selectedDate || endDate;
        this.setState({
            endShow: Platform.OS === 'ios',
            endDate: currentDate
        })

        let newDate = new Date(currentDate);
        let nDate = newDate.getDate() + "-" + (newDate.getMonth() + 1) + '-' + newDate.getFullYear();
        this.setState({
            todayDate: nDate
        })
        console.log(nDate)
    }

    newShowMode = (newCurrendMode) => {
        this.setState({
            endShow: true,
            endMode: newCurrendMode
        })
    }

    submit = () => {
        this.setState({ isLoading: true })

        fetch("http://13.127.179.165/api-bid-history-data", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                "env_type": "1",
                "app_key": global.appKey,
                "unique_token": global.uniqueToken,
                "bid_from": this.state.date,
                "bid_to": this.state.todayDate
            })
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON)
                this.setState({
                    historyData: responseJSON.bid_data

                })
                if (!responseJSON.status) {
                    ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                }
            })
            .finally(() => this.setState({ isLoading: false }))


    }
    emptyComponnt = () => {
        return (
            <View style={styles.noResultView} >
                {/* <Image style={styles.noResultImag} source={require('../../../../assets/images/no_resut.png')} /> */}
                <LottieView style={styles.noResultImag} source={require('../../../../assets/images/no_result.json')} autoPlay loop />

                <Text style={styles.noResultText} > No result found  </Text>
            </View>
        )
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
                                <Text style={styles.homeText} > Bid History </Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.firstView} >
                        <View style={styles.rowView}>

                            <View style={styles.datePickerView} >
                                <Text style={styles.fromText} >From Date </Text>
                                <TouchableOpacity style={styles.fromDateBtn} onPress={() => this.showMode('date')} >
                                    <View style={styles.fromDateBtnView} >
                                        <Image style={styles.pickerImag} source={require('../../../../assets/images/calender.png')} />
                                        <Text style={styles.textFromDateBtn} >{this.state.text}  </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.datePickerView1} >
                                <Text style={styles.fromText} >To Date </Text>
                                <TouchableOpacity style={styles.fromDateBtn} onPress={() => this.newShowMode('date')} >
                                    <View style={styles.fromDateBtnView} >
                                        <Image style={styles.pickerImag} source={require('../../../../assets/images/calender.png')} />
                                        <Text style={styles.textFromDateBtn} >{this.state.todayDate}  </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.submitView} >
                            <TouchableOpacity style={styles.submitBtn} onPress={this.submit} >
                                <Text style={styles.submitText} >SUBMIT</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View>
                        {this.state.show && (
                            <DateTimePicker
                                testID='dateTimePicker'
                                value={this.state.date}
                                maximumDate={new Date()}
                                mode={this.state.mode}
                                is24Hour={true}
                                display='default'
                                onChange={this.onChange}
                            />)}
                    </View>

                    <View>
                        {this.state.endShow && (
                            <DateTimePicker
                                testID='endTimePicker'
                                value={this.state.endDate}
                                maximumDate={new Date()}
                                mode={this.state.endMode}
                                is24Hour={true}
                                display='default'
                                onChange={this.endDatePicker}
                            />)}
                    </View>

                    <FlatList
                        data={this.state.historyData}
                        ListEmptyComponent={this.emptyComponnt}
                        refreshing={this.state.isLoading}
                        onRefresh={this.submit}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={styles.historyBtn} >
                                <View style={styles.flatListView} >
                                    <View style={styles.subFlatlistView} >

                                        <View style={{}} >
                                            <Text style={styles.gameNameFirst} >{item.game_name}</Text>

                                            <Text style={styles.gameNameSecond} >{(item.pana === "Half Sangam") ? item.session === "Close" ? "Close Digit :" : "Open Digit : " : item.pana === "Jodi Digit" ? "Digit : " : item.pana === "Full Sangam" ? "Open Pana :" : item.pana === "Single Pana" ? item.session === "Close" ? "Close Pana :" : "Open Pana :" : item.pana === "Single Digit" ? item.session === "Close" ? "Close Digit : " : "Open Digit :" : item.pana === "Triple Pana" ? item.session === "Close" ? "Close Pana :" : "Open Pana :" : item.pana === "Double Pana" ? item.session === "Close" ? "Close Pana :" : "Open Pana :" : "Open Pana :"} <Text style={styles.gamePoint} >{item.digits}</Text></Text>

                                            <Text style={[styles.gameNameSecond, (item.pana === "Single Digit") ? item.session === "Close" ? styles.gameNameSecond1 : styles.gameNameSecond1 : (item.pana === "Jodi Digit") ? item.session === "Close" ? styles.gameNameSecond1 : styles.gameNameSecond1 : (item.pana === "Triple Pana") ? item.session === "Close" ? styles.gameNameSecond1 : styles.gameNameSecond1 : (item.pana === "Double Pana") ? item.session === "Close" ? styles.gameNameSecond1 : styles.gameNameSecond1 : (item.pana === "Single Pana") ? item.session === "Close" ? styles.gameNameSecond1 : styles.gameNameSecond1 : styles.gameNameSecond]} >{(item.pana === "Half Sangam") ? item.session === "Close" ? "Open Pana :" : "Close Pana :" : item.pana === "Single Digit" ? item.session === "Close" ? "------" : "------" : item.pana === "Triple Pana" ? "------" : item.pana === "Double Pana" ? "------" : item.pana === "Jodi Digit" ? "------" : item.pana === "Single Pana" ? "------" : item.pana === "Full Sangam" ? "Close Pana : " : "Close Pana :"} <Text style={styles.gamePoint}>{(item.closedigits === "") ? "" : item.closedigits} </Text></Text>


                                            <Text style={[styles.gameNameSecond, (item.session === "") ? styles.gameNameSecond1 : styles.gameNameSecond]} >Session : <Text style={styles.gamePoint}>{[(item.session === "") ? " N/A " : item.session]}</Text></Text>
                                            <Text style={styles.gameNameSecond}>Date : <Text style={styles.gamePoint}>{item.bid_date}</Text> </Text>
                                        </View>
                                        <View style={styles.secondFlatlistView} >
                                            <Text style={styles.gameName1}>({item.pana}) </Text>
                                            <Text style={styles.gameName}>{item.points} pts</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                    />

                </ImageBackground>

            </SafeAreaView>
        )

    }
}