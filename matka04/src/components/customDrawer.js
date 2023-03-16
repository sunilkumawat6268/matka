import React from 'react'
import { Text, View, ImageBackground, TouchableOpacity, Linking, Image, Alert, ScrollView } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import Share from 'react-native-share';
import LinearGradient from 'react-native-linear-gradient';


const CustomDrawerScreen = (props) => {


    logOut = () => {
        Alert.alert(
            "MATKA",
            "Log out from Application ",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Log OUT", onPress: () => AsyncStorage.removeItem('@token') + props.navigation.dispatch(
                        StackActions.replace('login')
                    )
                }
            ]
        );
    }

    const url = global.appRates;
    const title = 'App link';
    const message = global.appMsg;

    const options = {
        title,
        url,
        message,
    };

    const onShare = async () => {
        try {
            Share.open(options);
        } catch (err) {
            console.log(err);
        }
    };

    return (

        <View style={{ flex: 1 }} >
            <View style={styles.mainFirstView} >
                <LinearGradient colors={['#964b00', '#5a2000']} style={styles.mainbackimag} >

                    <View style={styles.maingradientView} >
                        <View style={styles.backimageView} >
                            <Image style={styles.adminImag} source={require('../assets/images/admin.png')} />
                            <View style={styles.innerimagView} >
                                <Text style={styles.name} >{global.userName} </Text>
                                <Text style={styles.phoneNo} >{global.phoneNo} </Text>
                            </View>
                            <Text style={styles.phoneNo}>  </Text>


                        </View>

                        <View style={styles.mainheaderIcon} >
                            <TouchableOpacity onPress={onShare} >
                                <Image style={styles.drawericonImg} source={require('../assets/images/share.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={this.logOut}
                            >
                                <Image style={styles.drawericonImg} source={require('../assets/images/logout.png')} />

                            </TouchableOpacity>



                        </View>


                    </View>

                </LinearGradient>
            </View>

            <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false} >
                <View style={styles.firstView} >
                    <View style={styles.drawerContent} >
                        <DrawerContentScrollView {...props} >
                            <DrawerItemList {...props} />
                        </DrawerContentScrollView>
                    </View>

                    <TouchableOpacity style={styles.appRatesBtn}
                    >
                        <View style={styles.maindrawerIconView} >
                            <View style={styles.drawerIcon} >
                                <Image style={styles.starImag} source={require('../assets/images/home.png')} />
                            </View>
                        </View>

                        <View style={styles.textView} >
                            <ImageBackground style={styles.menuImg} source={require('../assets/images/menu_shape.png')} >
                                <Text style={styles.appRatesText} >Home</Text>
                            </ImageBackground>
                        </View>


                    </TouchableOpacity>

                    <TouchableOpacity style={styles.appRatesBtn}
                        onPress={() => { props.navigation.navigate("profile") }}
                    >
                        <View style={styles.maindrawerIconView} >
                            <View style={styles.drawerIcon} >
                                <Image style={styles.starImag} source={require('../assets/images/profile.png')} />
                            </View>
                        </View>

                        <View style={styles.textView} >
                            <ImageBackground style={styles.menuImg} source={require('../assets/images/menu_shape.png')} >
                                <Text style={styles.appRatesText} >Profile</Text>
                            </ImageBackground>
                        </View>


                    </TouchableOpacity>



                    {(() => {

                        if (global.betting == "1") {
                            return (
                                <TouchableOpacity style={styles.appRatesBtn}
                                    onPress={() => { props.navigation.navigate("wallet") }}
                                >

                                    <View style={styles.maindrawerIconView} >
                                        <View style={styles.drawerIcon} >
                                            <Image style={styles.starImag} source={require('../assets/images/wallet_1.png')} />
                                        </View>
                                    </View>

                                    <View style={styles.textView} >
                                        <ImageBackground style={styles.menuImg} source={require('../assets/images/menu_shape.png')} >
                                            <Text style={styles.appRatesText} >Wallet</Text>
                                        </ImageBackground>
                                    </View>


                                </TouchableOpacity>

                            )
                        }
                    })()}


                    {(() => {
                        if (global.betting == "1") {
                            return (
                                <TouchableOpacity style={styles.appRatesBtn}
                                    onPress={() => { props.navigation.navigate("bidHistory") }}
                                >

                                    <View style={styles.maindrawerIconView} >
                                        <View style={styles.drawerIcon} >
                                            <Image style={styles.starImag} source={require('../assets/images/bid_history.png')} />
                                        </View>
                                    </View>

                                    <View style={styles.textView} >
                                        <ImageBackground style={styles.menuImg} source={require('../assets/images/menu_shape.png')} >
                                            <Text style={styles.appRatesText} >Bid History</Text>
                                        </ImageBackground>
                                    </View>

                                </TouchableOpacity>


                            )
                        }


                    })()}

                    {(() => {
                        if (global.betting == "1") {
                            return (
                                <TouchableOpacity style={styles.appRatesBtn}
                                    onPress={() => { props.navigation.navigate("winHistory") }}
                                >
                                    <View style={styles.maindrawerIconView} >
                                        <View style={styles.drawerIcon} >
                                            <Image style={styles.starImag} source={require('../assets/images/win_history.png')} />
                                        </View>
                                    </View>

                                    <View style={styles.textView} >
                                        <ImageBackground style={styles.menuImg} source={require('../assets/images/menu_shape.png')} >
                                            <Text style={styles.appRatesText} >Win History</Text>
                                        </ImageBackground>
                                    </View>



                                </TouchableOpacity>


                            )
                        }
                    })()}



                    {(() => {
                        if (global.betting == "1") {
                            return (
                                <TouchableOpacity style={styles.appRatesBtn}
                                    onPress={() => { props.navigation.navigate("howToPlay") }}
                                >
                                    <View style={styles.maindrawerIconView} >
                                        <View style={styles.drawerIcon} >
                                            <Image style={styles.starImag} source={require('../assets/images/how_to_play.png')} />
                                        </View>
                                    </View>

                                    <View style={styles.textView} >
                                        <ImageBackground style={styles.menuImg} source={require('../assets/images/menu_shape.png')} >
                                            <Text style={styles.appRatesText} >How To Play</Text>
                                        </ImageBackground>
                                    </View>
                                </TouchableOpacity>

                            )
                        }


                    })()}

                    {(() => {
                        if (global.betting == "1") {
                            return (
                                <TouchableOpacity style={styles.appRatesBtn}
                                    onPress={() => { props.navigation.navigate("gameRates") }}
                                >
                                    <View style={styles.maindrawerIconView} >
                                        <View style={styles.drawerIcon} >
                                            <Image style={styles.starImag} source={require('../assets/images/game_rates.png')} />
                                        </View>
                                    </View>

                                    <View style={styles.textView} >
                                        <ImageBackground style={styles.menuImg} source={require('../assets/images/menu_shape.png')} >
                                            <Text style={styles.appRatesText} >Game Rates </Text>
                                        </ImageBackground>
                                    </View>

                                </TouchableOpacity>


                            )
                        }


                    })()}



                    <TouchableOpacity style={styles.appRatesBtn}
                        onPress={() => { props.navigation.navigate("contactUs") }}
                    >

                        <View style={styles.maindrawerIconView} >
                            <View style={styles.drawerIcon} >
                                <Image style={styles.starImag} source={require('../assets/images/contactus.png')} />
                            </View>
                        </View>

                        <View style={styles.textView} >
                            <ImageBackground style={styles.menuImg} source={require('../assets/images/menu_shape.png')} >
                                <Text style={styles.appRatesText} >Contact</Text>
                            </ImageBackground>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.appRatesBtn}
                        onPress={() => { props.navigation.navigate("newPassword") }}
                    >

                        <View style={styles.maindrawerIconView} >
                            <View style={styles.drawerIcon} >
                                <Image style={styles.starImag} source={require('../assets/images/change_password.png')} />
                            </View>
                        </View>

                        <View style={styles.textView} >
                            <ImageBackground style={styles.menuImg} source={require('../assets/images/menu_shape.png')} >
                                <Text style={styles.appRatesText} >Change Password</Text>
                            </ImageBackground>
                        </View>

                    </TouchableOpacity>



                    <TouchableOpacity style={styles.appRatesBtn}
                        onPress={() => Linking.openURL(global.appRates)}
                    >
                        <View style={styles.maindrawerIconView} >
                            <View style={styles.drawerIcon} >
                                <Image style={styles.starImag} source={require('../assets/images/rating.png')} />
                            </View>
                        </View>

                        <View style={styles.textView} >
                            <ImageBackground style={styles.menuImg} source={require('../assets/images/menu_shape.png')} >
                                <Text style={styles.appRatesText} >App Rates</Text>
                            </ImageBackground>
                        </View>

                    </TouchableOpacity>

                    {/* <TouchableOpacity style={styles.appRatesBtn} onPress={onShare} >
                        <View style={styles.maindrawerIconView} >
                            <View style={styles.drawerIcon} >
                                <Image style={styles.starImag} source={require('../assets/images/share.png')} />
                            </View>
                        </View>

                        <View style={styles.textView} >
                            <ImageBackground style={styles.menuImg} source={require('../assets/images/menu_shape.png')} >
                                <Text style={styles.appRatesText} >Share </Text>
                            </ImageBackground>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.appRatesBtn}
                        onPress={this.logOut}
                    >
                        <View style={styles.maindrawerIconView} >
                                        <View style={styles.drawerIcon} >
                                            <Image style={styles.starImag} source={require('../assets/images/win_history.png')} />
                                        </View>
                                    </View>

                                    <View style={styles.textView} >
                                        <ImageBackground style={styles.menuImg} source={require('../assets/images/menu_shape.png')} >
                                            <Text style={styles.appRatesText} >Win History</Text>
                                        </ImageBackground>
                                    </View>

                        <Image style={styles.starImag} source={require('../assets/images/logout.png')} />
                        <Text style={styles.appRatesText} >LOG OUT</Text>
                    </TouchableOpacity> */}


                </View>
            </ScrollView>

        </View >
    )
}




export default CustomDrawerScreen;