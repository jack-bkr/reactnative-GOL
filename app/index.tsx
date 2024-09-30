import { Text, View } from "react-native";

import GridView, {GridItem} from "@/components/Gridview";
import {useCallback, useState} from "react";

export default function Index() {
    const rowNum = 15;
    const colNum = 15;

    const updateParent = useCallback((index: number[], newColor: string) => {
        setGrid(currentGrid => {
            const newGrid = currentGrid.map(row => row.map(item => {
                if (item.index[0] === index[0] && item.index[1] === index[1]) {
                    return new GridItem(newColor, index, updateParent);
                }
                return item;
            }));
            return newGrid;
        })
    }, []);

    const [grid, setGrid] = useState(createInitialGrid(rowNum, colNum, updateParent));

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

function createInitialGrid(rowNum: number, colNum: number, updateParent: (index: number[], newColor: string) => void) {
    const grid = [];
    for (let i = 0; i < rowNum; i++) {
        const row = [];
        for (let j = 0; j < colNum; j++) {
            row.push(new GridItem("red", [i, j], updateParent));
        }
        grid.push(row);
    }
    return grid;
}
