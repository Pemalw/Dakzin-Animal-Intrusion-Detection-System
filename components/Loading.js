import {View, StyleSheet, Text} from 'react-native';

export default function Loading(){
    return(
        <View style={styles.container}>
            <Text>Loading....</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    }
})