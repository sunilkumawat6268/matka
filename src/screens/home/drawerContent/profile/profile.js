import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, ToastAndroid, FlatList, BackHandler, ImageBackground } from 'react-native'
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';


export default class ProfileScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: global.userName,
            email: global.email,
            phoneNo: [],
            edit: false,
            hide: false,
            photo: null,


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
        this.profile_04()
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );

    }

    profile_04 = () => {
        fetch('http://13.127.179.165/api-get-profile', {
            method: "POST",
            headers: {
                Accept: "application/json",
                'Content-type': "application/json",
            },
            body: JSON.stringify({
                "env_type": "1",
                "app_key": global.appKey,
                unique_token: global.uniqueToken
            })
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON.profile[0].user_name)
                // global.name = responseJSON.msg
                global.userName = responseJSON.profile[0].user_name
                global.email = responseJSON.profile[0].email
                global.wallet_Balance = responseJSON.profile[0].wallet_balance
                this.setState({
                    phoneNo: responseJSON.profile,

                })
            })
    }

    submit_04 = () => {
        var userName = this.state.userName;
        var email = this.state.email;
        const reg = /\S+@\S+\.\S+/;

        if (userName === "") {
            ToastAndroid.show('Enter UserName  ', ToastAndroid.SHORT)
        }

        else if (email !== "") {
            if (reg.test(this.state.email) === true) {
                fetch("http://13.127.179.165/api-profile-update", {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        "env_type": "1",
                        "app_key": global.appKey,
                        unique_token: global.uniqueToken,
                        email: email,
                        user_name: userName
                    })
                })
                    .then((response) => response.json())
                    .then((responseJSON) => {
                        console.log(responseJSON)

                        if (!responseJSON.status) {
                            ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)

                        }
                        else {
                            ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                            this.setState({
                                edit: !this.state.edit,
                                hide: !this.state.hide
                            })
                        }
                    })

            }
            else {
                ToastAndroid.show('Email invalid  ', ToastAndroid.SHORT)
            }
        }
        else {
            fetch("http://13.127.179.165/api-profile-update", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    "env_type": "1",
                    "app_key": global.appKey,
                    unique_token: global.uniqueToken,
                    email: email,
                    user_name: userName
                })
            })
                .then((response) => response.json())
                .then((responseJSON) => {
                    console.log(responseJSON)

                    if (!responseJSON.status) {
                        ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)

                    }
                    else {
                        ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                        this.setState({
                            edit: !this.state.edit,
                            hide: !this.state.hide
                        })
                    }
                })

        }
    }

    edit = () => {
        this.setState({
            edit: !this.state.edit,
            hide: !this.state.hide
        })
    }


    selectImg = () => {
        ImagePicker.openPicker({
            cropping: true
        }).then(response => {
            console.log(response.path);
            if (response.path == null) {
                console.log('fail !!');
            }
            else {
                this.setState({
                    photo: response.path
                })
            }


        });
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
                                <Text style={styles.homeText} > Profile  </Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.firstView} >

                        <View style={styles.mainImgView} >

                            <View style={styles.imgView} >
                                <Image style={styles.adminImg} source={(this.state.photo == null) ? require('../../../../assets/images/admin.png') : { uri: this.state.photo }} />
                            </View>
                            <View style={styles.cameraView}  >
                                <TouchableOpacity style={styles.cameraBtn} onPress={this.selectImg}>
                                    <Image style={styles.cameraImg} source={require('../../../../assets/images/camera.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>


                        <View>
                            <Text style={styles.numberText} >Phone No. </Text>
                            <FlatList
                                data={this.state.phoneNo}
                                renderItem={({ item }) =>
                                    <View>
                                        <Text style={styles.number1} >{item.mobile}</Text>
                                    </View>
                                }
                            />

                        </View>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.editBtn} onPress={this.edit} >
                            <Image style={styles.editImag} source={require('../../../../assets/images/edit.png')} />
                            <Text style={styles.editText} >EDIT</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mainInputView} >

                        <View style={styles.inputview} >
                            <Image style={styles.userImag} source={require('../../../../assets/images/user1.png')} />
                            <TextInput style={styles.userInput}
                                value={this.state.userName}
                                placeholder='User Name'
                                placeholderTextColor={'black'}
                                onChangeText={userName => this.setState({ userName })}
                                editable={this.state.edit}

                            />
                        </View>

                        <View style={styles.inputview} >
                            <Image style={styles.userImag} source={require('../../../../assets/images/email1.png')} />
                            <TextInput style={styles.userInput}
                                value={this.state.email}
                                placeholder='Email '
                                placeholderTextColor={'black'}
                                onChangeText={email => this.setState({ email })}
                                editable={this.state.edit}
                                keyboardType='email-address'
                            />
                        </View>

                        {this.state.hide ?
                            <View style={styles.btnView} >
                                <TouchableOpacity style={styles.submitBtn}
                                    onPress={this.submit_04}
                                >
                                    <Text style={styles.submitText} >SUBMIT</Text>
                                </TouchableOpacity>
                            </View> :
                            null
                        }

                    </View>

                </ImageBackground>

            </SafeAreaView>
        )
    }
}