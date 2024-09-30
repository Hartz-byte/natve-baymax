import { Image, StyleSheet, View } from "react-native";
import React, { FC, useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";

import { Colors, Fonts, lightColors } from "@/utils/Constants";
import { screenHeight, screenWidth } from "@/utils/Scaling";
import CustomText from "./global/CustomText";
import * as Tts from "expo-speech";
// import { initializeSpeech } from "@/utils/ttsListeners";

const bottomColors = [...lightColors].reverse();

const SplashScreen: FC = () => {
  const baymaxAnimation = useSharedValue(screenHeight * 0.8);
  const messageContainerAnimation = useSharedValue(screenWidth * 0.8);

  const launchAnimation = async () => {
    messageContainerAnimation.value = screenHeight * 0.001;

    setTimeout(() => {
      baymaxAnimation.value = -screenHeight * 0.02;

      Tts.speak("Hello! My name is Rose.");
    }, 600);
  };

  useEffect(() => {
    // initializeSpeech();
    launchAnimation();
  }, []);

  // baymax animation
  const animateImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(baymaxAnimation.value, {
            duration: 1500,
          }),
        },
      ],
    };
  });

  // message animation
  const messageContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(messageContainerAnimation.value, {
            duration: 1200,
          }),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageContainer, animateImageStyle]}>
        <Image
          source={require("../assets/images/launch.png")}
          style={styles.img}
        />
      </Animated.View>

      <Animated.View style={[styles.gradientContainer, messageContainerStyle]}>
        <LinearGradient colors={bottomColors} style={styles.gradient}>
          <View style={styles.textContainer}>
            <CustomText fontSize={34}>BAYMAX!</CustomText>

            {/* animation file */}
            <LottieView
              source={require("../assets/animations/sync.json")}
              style={{ width: 280, height: 100 }}
              autoPlay={true}
              loop
            />

            <CustomText>
              Synchronizing best configurations for you...
            </CustomText>
          </View>
        </LinearGradient>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: screenWidth - 20,
    height: screenHeight * 0.5,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  gradientContainer: {
    position: "absolute",
    height: "35%",
    bottom: 0,
    width: "100%",
  },
  gradient: {
    width: "100%",
    height: "100%",
    paddingTop: 30,
  },
  textContainer: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 20,
    padding: 20,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    alignItems: "center",
    shadowColor: Colors.border,
  },
});

export default SplashScreen;
