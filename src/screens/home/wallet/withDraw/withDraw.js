import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, FlatList, TextInput, Modal, ToastAndroid, ImageBackground } from 'react-native'
import styles from './styles';
import LottieView from 'lottie-react-native';


export default class WithDrawMoneyScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
          withDrawTime: [],
          upi: false,
          phoneNo: [],
          name: "",
          number: "",
          point: "",
          history: [],
          type: "",
          lastStatus: "",
          pointKey: false,
          isLoading: false,
          wallet: global.wallet_Balance,
        }
      }
    
    
      componentWillUnmount() {
        this.willBlurListener();
      }
    
      componentDidMount() {
        this.willBlurListener = this.props.navigation.addListener('focus', () => {
          this.wallet_Balance_04()
          this.withDraweData_04()
          this.methodList_04();
          this.amountwithMinMax_04();
        })
      }
      wallet_Balance_04 = () => {
        fetch('http://13.127.179.165/api-user-wallet-balance', {
          method: "POST",
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
            // console.log(responseJSON.wallet_amt)
            global.wallet_Balance = responseJSON.wallet_amt
    
          })
    
      }
    
      withDraweData_04 = () => {
        this.setState({ isLoading: true })
        fetch("http://13.127.179.165/api-user-withdraw-transaction-history", {
          method: "POST",
          headers: {
            Accept: 'application/json',
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            "env_type": "1",
            "app_key": global.appKey,
            unique_token: global.uniqueToken
          })
        })
          .then((response) => response.json())
          .then((responseJSON) => {
            // console.log(responseJSON.wallet_amt)
            // console.log(responseJSON.last_request_status)
            global.last_status = responseJSON.last_request_status
            global.wallet_Balance = responseJSON.wallet_amt
            this.setState({
              withDrawTime: responseJSON,
              history: responseJSON.withdrawdata,
            })
          })
          .finally(() => this.setState({ isLoading: false }))
      }
    
      methodList_04 = () => {
        fetch("http://13.127.179.165/api-user-payment-method-list", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
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
              phoneNo: responseJSON.result
            })
          })
      }
    
      amountwithMinMax_04 = () => {
        fetch('http://13.127.179.165/api-user-wallet-balance', {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": 'application/json',
          },
          body: JSON.stringify({
            "env_type": "1",
            app_key: global.appKey,
            unique_token: global.uniqueToken
          })
        })
          .then((response) => response.json())
          .then((responseJSON) => {
            // console.log(responseJSON)
            global.opentime = responseJSON.withdraw_open_time
            global.closetime = responseJSON.withdraw_close_time
            global.minWithDraw = responseJSON.min_withdrawal
            global.maxWithDraw = responseJSON.max_withdrawal
            global.wallet_Balance = responseJSON.wallet_amt
    
          })
      }
    
      withDraw_04 = () => {
        var point = this.state.point;
        var wallet = this.state.wallet;
    
        if (point === "") {
          ToastAndroid.show("Enter Points  ", ToastAndroid.SHORT)
        }
        else if (point.includes('-') || point.includes('.') || point.includes(',') || point.includes(' ')) {
          ToastAndroid.show('Invalid point ', ToastAndroid.SHORT)
        }
        else if (point > Number(wallet)) {
          ToastAndroid.show('Insufficient Points : ', ToastAndroid.SHORT)
          // console.log(amount, wallet)
        }
        else if (point < Number(global.minWithDraw)) {
          ToastAndroid.show("Minimum Amount required :" + global.minWithDraw, ToastAndroid.SHORT)
        }
        else if (point > Number(global.maxWithDraw)) {
          ToastAndroid.show("Maximum Amount required : " + global.maxWithDraw, ToastAndroid.SHORT)
        }
        else if (this.state.type == "") {
          ToastAndroid.show("Select the UPI Method  ", ToastAndroid.SHORT)
        }
        else if (global.withdraw != "1") {
          ToastAndroid.show("WithDraw off at this moment you can't withdraw ", ToastAndroid.SHORT)
    
        }
        else if (global.last_status === "0") {
          ToastAndroid.show("You have already pending Request  ", ToastAndroid.SHORT)
        }
        else {
          this.setState({
            point: "",
          })
          this.props.navigation.navigate('withDrawPin', {
            point: point,
            method: this.state.type,
          })
    
       
    
    
    
        }
      }
    
      noReceipt_04 = () => {
        ToastAndroid.show("No Receipt Available ", ToastAndroid.SHORT)
      }
    
    
      emptyComponnt_04 = () => {
        return (
          <View style={styles.noResultView} >
            {/* <Image style={styles.noResultImag} source={require('../../../../assets/images/no_resut.png')} /> */}
            <LottieView style={styles.noResultImag} source={require('../../../../assets/images/no_result.json')} autoPlay loop />
    
            <Text style={styles.noResultText} > No result found  </Text>
          </View>
        )
      }
    
      emptyUPI_04 = () => {
        return (
          <View style={styles.upiView} >
            <Text style={styles.upiText} > Select the Payment Method </Text>
          </View>
        )
      }
    
s    

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
                                <Text style={styles.homeText} > Withdraw Fund </Text>
                            </View>
                            <View>

                                <View style={{ flexDirection: 'row', marginTop: 5 }} >

                                    <Image style={styles.walletimag} source={require('../../../../assets/images/wallet.png')} />
                                    <Text style={styles.amountText} >{global.wallet_Balance} </Text>

                                </View>



                            </View>
                        </View>
                    </View>
                    <View style={styles.firstView} >

                        <View style={styles.timeView} >
                            <FlatList
                                data={[this.state.withDrawTime]}
                                style={styles.flatlistData}
                                horizontal
                                renderItem={({ item }) =>
                                    <View style={styles.flatListView1} >
                                        <Text style={styles.withDrawtimeText} >Open Time : {item.withdraw_open_time}   </Text>
                                        <Text style={styles.withDrawtimeText} >Close Time :{item.withdraw_close_time}</Text>
                                    </View>
                                }
                            />
                        </View>

                        <View>
                            <TextInput placeholder='Enter Points'
                                value={this.state.point}
                                style={styles.pointInput}
                                keyboardType="numeric"
                                maxLength={7}
                                placeholderTextColor="#000"
                                onChangeText={point => this.setState({ point })}
                                secureTextEntry={this.state.pointKey}
                            />
                            <TouchableOpacity style={styles.selectBtn}
                                onPress={() => { this.setState({ upi: true }) }}
                            >
                                <View style={styles.btnView} >
                                    <Text style={styles.btnText1} > Select a UPI </Text>
                                    {/* <Image style={styles.arrowImag} source={require("../../../../../assets/images/down_arrow.png")} /> */}
                                </View>
                            </TouchableOpacity>

                            <View style={styles.selectItem} >
                                <Text style={styles.selectText} > {this.state.name} : {this.state.number}  </Text>
                            </View>

                            <TouchableOpacity style={styles.btn} onPress={this.withDraw_04} >
                                <Text style={styles.btnText} > WITHDRAW NOW </Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    {(() => {
                        if (this.state.history.length > 0) {
                            return (
                                <View style={styles.recentView}>
                                    <Text style={styles.recent} > Recent Transaction  </Text>
                                </View>
                            )
                        }
                    })()}


                    <FlatList
                        data={this.state.history}
                        ListEmptyComponent={this.emptyComponnt_04}
                        refreshing={this.state.isLoading}
                        onRefresh={this.withDraweData_04}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={
                                    (item.payment_receipt == "http://13.127.179.165/uploads/file/") ? this.noReceipt_04 : () => {
                                        this.props.navigation.navigate("withDrawWebView", {
                                            receipt: item.payment_receipt
                                        })
                                    }
                                }
                            >

                                <View style={styles.mainViewFlateList} >
                                    <View style={styles.mainFlatListView} >
                                        <View style={styles.subflatListView} >
                                            <View>
                                                <Text style={styles.id} > ID : <Text style={styles.idNo}>{item.request_number} </Text></Text>
                                                <Text style={styles.id} > Payment Method : <Text style={styles.idNo}> {[(item.payment_method == 2) ? "PayTM" : item.payment_method == 3 ? "Google Pay" : "PhonePe"]}</Text> </Text>

                                                <Text style={styles.date} > {item.insert_date} </Text>
                                                <Text style={[styles.id1, (item.remark == "") ? styles.remarkempty : styles.id1]} > Remark : <Text style={styles.remark}> {item.remark} </Text></Text>
                                                {/* <Text style={styles.remark} >  </Text> */}
                                            </View>

                                            <View style={styles.pointsView}>
                                                <Text style={styles.amount}>{item.request_amount} <Text style={styles.pts}>pts</Text></Text>

                                                <Text style={[styles.status, (item.request_status == 0) ? styles.pending : item.request_status == 1 ? styles.rejected : styles.apporved]} > {[(item.request_status == 0) ? "Pending" : item.request_status == 1 ? "Rejected" : "Approved"]} </Text>

                                            </View>
                                        </View>
                                    </View>
                                </View>

                            </TouchableOpacity>

                        }
                    />

                    <View>
                        <Modal
                            animationType={"slide"}
                            transparent={true}
                            visible={this.state.upi}
                            onRequestClose={() => { console.log("Modal has been closed.") }}>
                            <View style={styles.mainInnerModalView} >
                                <View style={styles.modal}>
                                    <TouchableOpacity
                                        onPress={() => { this.setState({ upi: false }) }}
                                    >
                                        <Image style={styles.crossImg} source={require('../../../../assets/images/cross.png')} />
                                    </TouchableOpacity>
                                    <FlatList
                                        style={styles.flatListPhone}
                                        data={this.state.phoneNo}
                                        ListEmptyComponent={this.emptyUPI_04}

                                        renderItem={({ item }) =>
                                            <View style={styles.flatListView} >
                                                <TouchableOpacity style={styles.phoneBtn}
                                                    onPress={() => {
                                                        this.setState({
                                                            name: item.name,
                                                            number: item.value,
                                                            upi: false,
                                                            type: item.type
                                                        })
                                                    }}
                                                >
                                                    <View style={styles.dataView} >
                                                        <Text style={styles.name} >{item.name} :</Text>
                                                        <Text style={styles.name} >{item.value}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        }
                                    />
                                </View>
                            </View>
                        </Modal>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}


