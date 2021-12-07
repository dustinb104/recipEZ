import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ProfileScreen = (props) => {
    return (
        <View style={styles.container}>
            
                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' }} style={styles.image} resizeMode="center"></Image>
                    </View>                   
                </View>

                <View style={styles.textGroup}>
                    <Text style={[{ color: "purple", fontWeight:'700', fontSize: 15, textTransform: 'uppercase'  }]}>Student</Text>
                    <Text style={[{ color: "#52575D", fontWeight: "700", fontSize: 36 }]}>Jane Doe</Text>
                    <Text style={[{ color: "#AEB5BC", fontSize: 17, textAlign: 'center' }]}>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
                </View>     
                       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,        
        paddingVertical: 20,      
        backgroundColor: "#FFF"
    },    
    image: {
        
        height: '150%',
        width: '100%',
    },

    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "purple"
    },

    textGroup: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
   
});


export default ProfileScreen;