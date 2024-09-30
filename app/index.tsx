import {Button, Text, View} from "react-native";

import GridView, {GridItem} from "@/components/Gridview";
import {useCallback, useEffect, useState} from "react";

export default function Index() {
    const rowNum = 16;
    const colNum = 16;

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

    useEffect(() => {
        setInitialState(grid, rowNum, colNum);
    }, []);

    const resetGrid = () => {
        const newGrid = createInitialGrid(rowNum, colNum, updateParent);
        setGrid(newGrid);
        setInitialState(newGrid, rowNum, colNum);
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
            <Button title="Reset" onPress={resetGrid} />
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

function setInitialState(grid: GridItem[][], rowNum: number, colNum: number) {
    const middleRow  = rowNum / 2;
    const middleCol = colNum / 2;

    if (Number.isInteger(middleRow) && Number.isInteger(middleCol)) {
        grid[middleRow][middleCol].setColor("green");
        grid[middleRow][middleCol - 1].setColor("green");
        grid[middleRow - 1][middleCol].setColor("green");
        grid[middleRow - 1][middleCol - 1].setColor("green");
        grid[middleRow + 1][middleCol + 1].setColor("green");
        grid[middleRow + 1][middleCol - 2].setColor("green");
        grid[middleRow - 2][middleCol + 1].setColor("green");
        grid[middleRow - 2][middleCol - 2].setColor("green");
    } else if (Number.isInteger(middleRow) && !Number.isInteger(middleCol)) {
        grid[middleRow][middleCol - 0.5].setColor("green");
        grid[middleRow - 1][middleCol - 0.5].setColor("green");
        grid[middleRow - 2][middleCol + 0.5].setColor("green");
        grid[middleRow - 2][middleCol - 1.5].setColor("green");
        grid[middleRow + 1][middleCol - 1.5].setColor("green");
        grid[middleRow + 1][middleCol + 0.5].setColor("green");
    } else if (!Number.isInteger(middleRow) && Number.isInteger(middleCol)) {
        grid[middleRow - 0.5][middleCol].setColor("green");
        grid[middleRow - 0.5][middleCol - 1].setColor("green");
        grid[middleRow - 1.5][middleCol + 1].setColor("green");
        grid[middleRow + 0.5][middleCol + 1].setColor("green");
        grid[middleRow - 1.5][middleCol - 2].setColor("green");
        grid[middleRow + 0.5][middleCol - 2].setColor("green");
    } else {
        grid[middleRow - 0.5][middleCol - 0.5].setColor("green");
        grid[middleRow - 1.5][middleCol + 0.5].setColor("green");
        grid[middleRow + 0.5][middleCol - 1.5].setColor("green");
        grid[middleRow - 1.5][middleCol - 1.5].setColor("green");
        grid[middleRow + 0.5][middleCol + 0.5].setColor("green");
    }
}
