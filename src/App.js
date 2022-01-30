import React from "react";
import { SafeAreaView, Text } from "react-native";

import MainScrn from "./screens/MainScrn";
import MainProvider from "./providers/MainProvider";

const App = () => {
  return (
    <SafeAreaView>
      <Text>1423</Text>
      <MainProvider>
        <MainScrn />
      </MainProvider>
    </SafeAreaView>
  );
};

export default App;
