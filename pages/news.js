import React from "react";
import MapView, { Marker } from "react-native-maps";

import { View, StyleSheet, Dimensions } from "react-native";

export default function Map () {
    return(
        <View style={styles.container}>
            <MapView
            style={styles.mapStyle}
            initialRegion={{
                latitude: -22.89090471251651,
                longitude: -43.22856502668827,
                latitudeDelta: 0.06,
                longitudeDelta: 0.09, 
                
            }}
            >
                <Marker 
                coordinate={{
                    latitude: -22.89090471251651,
                    longitude: -43.22856502668827,
                }}
                title="São Januario"
                description="Meu Caldeirão"
                
                
                />
                
                
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: '100%',
        
    }
})