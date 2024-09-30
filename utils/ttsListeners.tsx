import Tts from "react-native-tts";

export const initializeTtsListeners = async () => {
  Tts.getInitStatus().then(
    (e) => {
      console.log(e);

      console.log("All ok TTS ✅");
    },
    (err) => {
      if (err.code === "no_engine") {
        console.log("no engine TTS");

        Tts.requestInstallEngine();
      }
    }
  );
};
