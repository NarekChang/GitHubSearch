import React from "react";
import { SafeAreaView } from "react-native";

import MainScrn from "./screens/MainScrn";
import MainProvider from "./providers/MainProvider";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainProvider>
        <MainScrn />
      </MainProvider>
    </SafeAreaView>
  );
};

export default App;
