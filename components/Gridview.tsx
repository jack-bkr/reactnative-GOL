import React from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';


type GridItem = {
  color: string;
  index: number;
}

const Grid = ({ rowNum, colNum }: { rowNum: number, colNum: number }) => {
  const rows: GridItem[][] = []

  for (let i = 0; i < rowNum; i++) {
    const column: GridItem[] = []
    for (let j = 0; j < colNum; j++) {
      column.push({ color: 'red' } as GridItem);
    }
    rows.push(column)
  }

  return (
    <FlatList
      data={rows}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.row}>
          {item.map((box, index) => (
            <View style={[styles.box, { backgroundColor: box.color }]}>
              <Text>{index}</Text>
            </View>
          ))}
        </View>
      )}    
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: 50,
    height: 50,
  }
});

export default Grid;