import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, Linking, TouchableOpacity, Image, ScrollView, BackHandler, ImageBackground } from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';


export default class HowToPlayScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            htmlText: [],
            youTubeLink: [],

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
        this.Text();
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
    }

    Text = () => {
        fetch('http://13.127.179.165/api-how-to-play', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                "env_type": "1",
                "app_key": global.appKey
            })
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON)
                console.log(responseJSON.content[0].how_to_play_content)
                var result = responseJSON.content[0].how_to_play_content;
                result = result.replace(/(<([^>]+)>)/gi, "");
                result = result.replaceAll("&nbsp;", "\n");
                this.setState({
                    htmlText: result,
                    youTubeLink: responseJSON.content
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
                                <Text style={styles.homeText} > How To Play </Text>
                            </View>

                        </View>
                    </View>
{/* 
                    <View style={styles.contactImgView} >
                        <LottieView style={styles.contactImg} source={require('../../../../assets/images/howToPlay.json')} autoPlay loop />

                    </View> */}


                    <View style={styles.firstView} >
                        <LottieView style={styles.contactImg} source={require('../../../../assets/images/howToPlay.json')} autoPlay loop />

                        <Text style={styles.heading} > How to Play </Text>
                    </View>

                    <View style={styles.flatListView} >




                        <FlatList
                            data={[this.state.htmlText]}
                            renderItem={({ item }) =>
                                <View style={styles.flatListDataView} >


                                    <Text style={styles.dataText} >{item}</Text>
                                </View>
                            }
                        />

                    </View>

                    <FlatList
                        data={this.state.youTubeLink}
                        renderItem={({ item }) =>
                            <View style={styles.flatListDataView1} >
                                <TouchableOpacity style={styles.youTubeBtn} onPress={() => Linking.openURL(item.video_link)} >
                                    <View style={{ alignItems: 'center' }} >
                                        {/* <Image style={styles.imag} source={require('../../../../../assets/images/play_white.png')} /> */}
                                        <LottieView style={styles.imag} source={require('../../../../assets/images/you_tube.json')} autoPlay loop />

                                    </View>
                                    <Text style={styles.youTubeLink} > {item.video_link} </Text>
                                </TouchableOpacity>

                            </View>
                        }
                    />

                </ImageBackground>
            </SafeAreaView>
        )
    }
}
