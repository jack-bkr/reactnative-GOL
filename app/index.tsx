import { Text, View } from "react-native";

import Grid from "@/components/Gridview";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Grid rowNum={10} colNum={10} />
    </View>
  );
}
