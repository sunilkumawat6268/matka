import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home';
import CustomDrawerScreen from '../components/customDrawer';



const MainDrawer = createDrawerNavigator();

function Drawer() {
    return (
        <MainDrawer.Navigator initialRouteName="drawerhome"
            drawerContent={props => <CustomDrawerScreen {...props} />}
            screenOptions={{
                drawerLabelStyle: {
                    color: '#fff',
                    fontSize: 16,
                    // marginLeft: -5,
                    fontWeight: '600'
                },
                drawerActiveTintColor: '#000',
                headerStyle: {
                    backgroundColor: "#fb0218",
                    borderRadius: 35,
                },
                headerTitleAlign: 'center',
                headerTintColor: "#000",
                headerTitleStyle: {
                    fontSize: 17,
                    color: '#000',
                    fontWeight: '600'
                },
                drawerStyle:{
                    backgroundColor:         "#fff",
                    borderBottomRightRadius: 35,
                    borderTopRightRadius:    35,
                    // width:                   90,
                }
            }}

            drawerPosition='left'
            drawerType="front"
            edgewidth={100}
            overlaycolor='#00000090'
        >


            <MainDrawer.Screen name='drawerhome' component={HomeScreen} options={({ navigation }) => ({
                headerShown: false,
                title: 'HOME',
                headerStyle: {
                    backgroundColor: "blue"
                },
                headerTintColor: '#000',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 17,
                },
                headerRight: () => (

                    (() => {
                        if (global.betting == "1") {
                            return (
                                <TouchableOpacity
                                    disabled={global.betting === "0"}
                                    onPress={() => { navigation.navigate('wallet') }}
                                >
                                    <View style={{ flexDirection: 'row', }} >

                                        <Image style={{ width: 35, height: 35 }} source={require('../assets/images/wallet.png')} />
                                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff', marginTop: 3, marginRight: 10 }} >{global.wallet_Balance} </Text>

                                    </View>

                                </TouchableOpacity>

                            )
                        }


                    })()


                ),


            })} />


            {/* <MainDrawer.Screen name='wallet' component={WalletScreen} options={{
                    headerShown:false
                }} /> */}

        </ MainDrawer.Navigator>
    );
}

export default Drawer;
