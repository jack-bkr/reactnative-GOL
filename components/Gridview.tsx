import React, {useRef} from 'react';
import { StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity } from 'react-native';

export class GridItem {
    color: string;
    index: number[];
    ref: React.RefObject<any>;

    constructor(color: string, index: number[]){
        this.color = color;
        this.index = index;
        this.ref = useRef(null);
    }

    handleClick = () => {
        console.log(this.index);
        if (this.color === "red") {
            this.color = "green";

        } else {
            this.color = "red";
        }
        console.log(this.ref);
        //this.ref.current.style.backgroundColor = this.color;
    }
}

const GridView = ({ Grid, rowNum, colNum }: { Grid: GridItem[][], rowNum: number, colNum: number }) => {
    const screenWidth = Dimensions.get('window').width;
    const boxSize = (screenWidth / colNum) - 2;

    return (
        <FlatList
            style={styles.container}
            data={Grid}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.row}>
                    {item.map((box, index) => (
                        <TouchableOpacity key={index} onPress={() => box.handleClick()} >
                            <View ref={box.ref} style={[styles.box, { backgroundColor: box.color, width: boxSize, height: boxSize }]} >
                                <Text style={{fontSize:7}} >{box.index[0]}, {box.index[1]}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    row: {
        flexDirection: 'row',
    },
    box: {
        borderColor: 'black',
        borderWidth: 1,
    }
});

export default GridView;
