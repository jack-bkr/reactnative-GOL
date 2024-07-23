import { Text, View } from "react-native";

import GridView, {GridItem} from "@/components/Gridview";
import {useState} from "react";

export default function Index() {
    const rowNum = 15;
    const colNum = 15;

    const grid: GridItem[][] = []

    for (let i = 0; i < rowNum; i++) {
        const column: GridItem[] = []
        for (let j = 0; j < colNum; j++) {
            column.push(new GridItem("red", [i, j]));
        }
        grid.push(column)
    }
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <GridView Grid={grid} rowNum={rowNum} colNum={colNum} />
        </View>
    );
}
