import React from "react";
import { View, Image, StyleSheet } from "react-native";


export default function Home () {
return (
<View>
    <Image 
      style={styles.almirante}
      source={require('../assets/almirante.jpg')
    }
     />
</View>
)
}

const styles = StyleSheet.create({
 almirante: { 
    width: "100%",
    justifyContent: 'center',

  }
})