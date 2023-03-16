import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash';
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/login/signUp';
import ForgotPasswordScreen from '../screens/login/forgotPassword';
import OtpScreen from '../screens/login/otp';
import ChangePasswordScreen from '../screens/login/changePassword';
import RefreshScreen from '../screens/login/otp/refresh';
import HomeScreen from '../screens/home';
import PinScreen from '../screens/login/pin';
import WalletScreen from '../screens/home/wallet';
import GameScreen from '../screens/home/game';
import SingleDigitScreen from '../screens/home/game/singleDigit';
import TransferScreen from '../screens/home/wallet/transfer';
import MethodScreen from '../screens/home/wallet/method';
import WithDrawScreen from '../screens/home/wallet/withDraw';
import WithDrawPinScreen from '../screens/home/wallet/withDraw/withDrawPin';
import WithDrawWebViewScreen from '../screens/home/wallet/withDraw/withDrawWebView/withDrawWebView';
import AddFundScreen from '../screens/home/wallet/addfund';
import PlayStarLineScreen from '../screens/home/playStarLine';
import PlayBidHistoryScreen from '../screens/home/playStarLine/playBidHistory';
import PlayWinHistoryScreen from '../screens/home/playStarLine/playWinHistory';
import ChartScreen from '../screens/home/playStarLine/chart';
import SinglePanaScreen from '../screens/home/game/singlePana';
import DoublePanaScreen from '../screens/home/game/doublePana';
import FullSangamScreen from '../screens/home/game/fullSangam';
import HalfSangamScreen from '../screens/home/game/halfSangam';
import JodiDigitScreen from '../screens/home/game/jodiDigit';
import TriplePanaScreen from '../screens/home/game/triplePana';
import PlayStarGameScreen from '../screens/home/playStarLine/playStarGame';
import PlaySingleDigitScreen from '../screens/home/playStarLine/playStarGame/playSingleDigit';
import PlaySinglePanaScreen from '../screens/home/playStarLine/playStarGame/playSinglePana';
import PlayDoublePanaScreen from '../screens/home/playStarLine/playStarGame/playDoublePana';
import PlayTriplePanaScreen from '../screens/home/playStarLine/playStarGame/playTriplePana';
import BidHistoryScreen from '../screens/home/drawerContent/bidHistory';
import ContactUsScreen from '../screens/home/drawerContent/contactUs';
import GameRatesScreen from '../screens/home/drawerContent/gameRates';
import NewPasswordScreen from '../screens/home/drawerContent/newPassword';
import HowToPlayScreen from '../screens/home/drawerContent/howToPlay';
import ProfileScreen from '../screens/home/drawerContent/profile';
import WinHistoryScreen from '../screens/home/drawerContent/winHistory';
import Drawer from './drawer';
import WebViewScreen from '../screens/home/webView';
import MaintainenceScreen from '../screens/home/maintainence';
import TestScreen from '../screens/test';
import Test1Screen from '../screens/test/test1';
import MapScreen from '../screens/test/map';



const MainStack = createNativeStackNavigator();


const Navigator = () => {
    return (

        <MainStack.Navigator initialRouteName="splash" screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: "#964b00"
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
            },

        }}  >

            <MainStack.Screen name='splash' component={SplashScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='login' component={LoginScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='signUp' component={SignUpScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='forgotPassword' component={ForgotPasswordScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='otp' component={OtpScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='changePassword' component={ChangePasswordScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='refresh' component={RefreshScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='pin' component={PinScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='home' component={Drawer} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='webView' component={WebViewScreen} options={({ route }) => ({
                title: route.params.webViewHeaderName,

            })}
            />

            <MainStack.Screen name='maintainence' component={MaintainenceScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='wallet' component={WalletScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='game' component={GameScreen}
                options={({ route }) => ({
                    title: route.params.headername,

                })}
            />

            <MainStack.Screen name='singleDigit' component={SingleDigitScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='singlePana' component={SinglePanaScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='doublePana' component={DoublePanaScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='fullSangam' component={FullSangamScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='halfSangam' component={HalfSangamScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='jodiDigit' component={JodiDigitScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='triplePana' component={TriplePanaScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='transfer' component={TransferScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='method' component={MethodScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='withDraw' component={WithDrawScreen} options={{
                headerShown: false
            }} />



            <MainStack.Screen name='withDrawPin' component={WithDrawPinScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='withDrawWebView' component={WithDrawWebViewScreen} options={{
                title: "Payment Receipt "
            }} />

            <MainStack.Screen name='addFund' component={AddFundScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='playStarLine' component={PlayStarLineScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='playBidHistory' component={PlayBidHistoryScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='playWinHistory' component={PlayWinHistoryScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='chart' component={ChartScreen} options={{
                title: " Chart"
            }} />

            <MainStack.Screen name='playStarGame' component={PlayStarGameScreen} options={({ route }) => ({
                title: route.params.time,

            })} />

            <MainStack.Screen name='playSingleDigit' component={PlaySingleDigitScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='playSinglePana' component={PlaySinglePanaScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='playDoublePana' component={PlayDoublePanaScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='playTriplePana' component={PlayTriplePanaScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='bidHistory' component={BidHistoryScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='contactUs' component={ContactUsScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='gameRates' component={GameRatesScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='newPassword' component={NewPasswordScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='howToPlay' component={HowToPlayScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='profile' component={ProfileScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='winHistory' component={WinHistoryScreen} options={{
                headerShown: false
            }} />

            <MainStack.Screen name='test' component={TestScreen} />

            <MainStack.Screen name='test1' component={Test1Screen} options={{
                headerShown:false
            }} />

            <MainStack.Screen name='map' component={MapScreen} options={{
                headerShown:false
            }} />




        </MainStack.Navigator>
    );
}

export default Navigator; 