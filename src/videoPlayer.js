import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
const { width, height } = Dimensions.get('window')
import { Ionicons } from "@expo/vector-icons";

export default function videoPlayer() {
    const playerRef = React.useRef(null);
    const [elapsed, setElapsed] = useState(0);
    const [duration, setDuration] = useState(0)
    const [seek, setSeek] = useState(0)

    useEffect(() => {
        const interval = setInterval(async () => {
            const elapsed_sec = await playerRef.current.getCurrentTime();
            const elapsed_ms = Math.floor(elapsed_sec * 1000);
            const min = Math.floor(elapsed_ms / 60000);
            const seconds = Math.floor((elapsed_ms - min * 60000) / 1000);
            setElapsed(min.toString().padStart(2, '0'));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    async function calculateDuration() {
        const duration = await playerRef.current.getDuration();
        const ms = Math.floor(duration * 1000);
        const min = Math.floor(ms / 60000);
        setDuration(min)
    }

    useEffect(() => {
        if (parseFloat(elapsed) > 0 && parseFloat(duration) > 0) {
            let result = (parseFloat(elapsed) / parseFloat(duration)) * 100;
            setSeek(parseFloat(result))
        }
    }, [duration, elapsed])

    return (
        <SafeAreaView style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <YoutubePlayer
                    ref={playerRef}
                    height={300}
                    play={true}
                    videoId={"q_AJK75oaqA"}
                    mute={true}
                    onReady={() => calculateDuration()}
                />
            </View>
            <View style={styles.centerContent}>
                <Text>Course Content</Text>
                <View style={styles.row}>
                    <Ionicons name='checkmark-circle' size={20} style={seek >= 33 && styles.successText} />
                    <Text>  33%</Text>
                </View>

                <View style={styles.row}>
                    <Ionicons name='checkmark-circle' size={20} style={seek >= 66 && styles.successText} />
                    <Text>  66%</Text>
                </View>

                <View style={styles.row}>
                    <Ionicons name='checkmark-circle' size={20} style={seek >= 100 && styles.successText} />
                    <Text>100%</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    video: {
        height: 200,
        width: 300,
    },
    successText: {
        color: 'green'
    },
    centerContent: { alignItems: 'center' },
    row: { flexDirection: 'row' }
});
