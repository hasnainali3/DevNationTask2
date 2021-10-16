import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import BottomTab from './components/BottomTab';
const image = { uri: 'https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg' }
const data = [
    image,
    image,
    image,
    image
]

export default function initialScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <Text style={{ padding: 10 }}>Learning Path</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ flexWrap: 'wrap', padding: 10 }}>
                    {data.map((image, ind) => {
                        let randomColor = (Math.random() * 0xFFFFFF << 0).toString(16);
                        return <TouchableOpacity
                            style={[styles.image, { backgroundColor: `#${randomColor}`, height: 150, width: 150, padding: 10 }]}
                            key={ind}>
                            <Image source={image} style={{ height: 50, width: 50 }} />
                            <Text style={{ marginTop: 10 }}>Introduction to Web Development</Text>
                        </TouchableOpacity>
                    })}
                </ScrollView>

                <Text style={{ padding: 10 }}>Free Cources</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ flexWrap: 'wrap', padding: 10 }}>
                    {data.map((image, ind) => <TouchableOpacity style={styles.image} key={ind} onPress={() => navigation.navigate('videoPlayer')}>
                        <Image source={image} style={{ flex: 1 }} />
                        <View style={styles.bottomContainer}>
                            <Text>Introduction to Web Development</Text>
                            <View style={styles.row}>
                                <Ionicons name='play-circle-outline' size={20} />
                                <Text>Start Now</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    )}
                </ScrollView>
            </ScrollView>
            <BottomTab />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // padding: 20
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 10,
        marginRight: 10,
        overflow: 'hidden'
    },
    bottomContainer: { backgroundColor: '#fffdd0', height: 100, padding: 10 },
    row: { flexDirection: 'row', alignItems: 'center', marginTop: 15 }
});
