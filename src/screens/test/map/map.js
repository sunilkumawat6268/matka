import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Circle } from 'react-native-maps';

export default function MapScreen({ route }) {

    const { city, lat, lng } = route.params;

    const callOutMesg = () => {
        alert("Welcome in "+ city )
    }

    return (
        <View style={styles.body}>
            <Text style={
                styles.text
            }>
                {city}
            </Text>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Circle
                    center={{
                        latitude: lat,
                        longitude: lng
                    }}
                    radius={1000}
                    fillColor={'rgba(97,168,229,0.3) '}
                >

                </Circle>
                <Marker
                    coordinate={{
                        latitude: lat,
                        longitude: lng
                    }}
                    pinColor={'red'}

                >
                    <Callout onPress={callOutMesg} >
                        <Image style={styles.parisImg} source={require('../../../assets/images/paris.png')} />
                        <Text> {city}  </Text>
                    </Callout>

                </Marker>



            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        margin: 10,
        fontWeight:"bold",
        color:'black'
    },
    map: {
        width: '100%',
        height: '100%',
    },
    parisImg: {
        width: 100,
        height: 100
    }
});