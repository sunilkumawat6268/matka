import React, { Component } from 'react'
import { Text, View, Button, Image, SafeAreaView, TouchableHighlight, TouchableOpacity, FlatList, ToastAndroid, TextInput } from 'react-native'
import styles from './styles'
import ImagePicker from 'react-native-image-crop-picker';
import PushNotification from "react-native-push-notification";


var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");


export default class TestScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photo: null,
            dashboard: [],
            realTime: "",
            name: ""
        }
    }



    componentDidMount() {
        this.dashboard_Data_04()


    }




    // selectImg = () => {
    //     const options = {};
    //     launchImageLibrary(options, response => {
    //         // URI = response.assets[0]
    //         console.log(response, "success response ");
    //         // console.log(response.assets[0].height);
    //         if (response.didCancel == true) {
    //             console.log("Fail first");

    //         }
    //         else {
    //             console.log("double succes");
    //             this.setState({
    //                 photo: response.assets[0].uri
    //             })
    //             URI = response.assets[0].uri;
    //         }


    //     })
    // }

    selectImg = () => {
        ImagePicker.openPicker({
            cropping: true
        }).then(response => {
            console.log(response.path);
            console.log(response);
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

    dashboard_Data_04 = () => {
        this.setState({ isLoading: true })

        try {
            fetch('https://mocki.io/v1/aac8b81a-139c-4235-82e6-0dbadf33f2b7', {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((responseJSON) => {
                    // console.log(responseJSON.telegram_no)
                    console.log(responseJSON);

                    this.setState({
                        dashboard: responseJSON,

                    })

                })
                .finally(() => this.setState({ isLoading: false }))

        }
        catch (error) {
            console.log("error", error);
        }
    }

    handelPushNotification = (item, index) => {
        PushNotification.localNotification({
            channelId: 'test-channel',
            title: 'Most Beautiful Counrty : ' + item.country,
            message: item.city,
            // bigText:"Your Game Name is " + item.game_name + " and this game message is " + item.msg,
            // color: 'yellow',
            id: index

        })



    }

    secondFunction = () => {
        // console.log('Second Function ');

        var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
        console.log(myDate)
        ToastAndroid.show(" Time : " + myDate, ToastAndroid.SHORT);

    }

    name = () => {
        var name= this.state.name;
        if( name == ""){
            alert("Enter Name")
        }
        else{
           this.selectImg()
        }
    }


    render() {
        return (
            <SafeAreaView style={styles.mainView} >
                <View style={styles.firstView} >

                    {/* <Text style={styles.text} > {this.state.photo} </Text> */}
                    <View style={styles.imgView} >
                        <TouchableOpacity activeOpacity={0.2} onPress={(this.state.photo == null) ? this.selectImg : () => {
                            this.props.navigation.navigate('test1', {
                                uri: this.state.photo
                            })
                        }} >
                            <Image style={styles.img} source={(this.state.photo == null) ? require('../../assets/images/admin.png') : { uri: this.state.photo }} />
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.text} >Testing Push Notification  </Text>

                    <TextInput
                        placeholder='Enter Name'
                        onChangeText={name => this.setState({ name })}
                        placeholderTextColor={'red'}
                        p

                    />



                    <Button
                        title='Select Image'
                        onPress={this.name}

                    />


                    <FlatList
                        data={this.state.dashboard}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => {
                                this.handelPushNotification(item, index)
                                this.props.navigation.navigate('map', {
                                    city: item.city,
                                    lat: item.lat,
                                    lng: item.lng,
                                })
                            }} >
                                <View style={styles.mainFlatListView} >
                                    <Text style={styles.gameName} > {item.country} </Text>
                                    <Text style={styles.msg} > {item.city} </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />


                </View>
            </SafeAreaView >
        )
    }
}