import * as Speech from "expo-speech";

export const initializeSpeech = async () => {
  try {
    const voices = await Speech.getAvailableVoicesAsync();
    if (voices.length > 0) {
      console.log(voices);
    } else {
      console.log("No voices available. Speech might not be supported.");
    }
  } catch (error) {
    console.error("Error initializing Speech:", error);
  }
};
