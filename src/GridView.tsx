import React,{useCallback,useState} from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default function GridView() {
    
    const getRandomColor = useCallback(() => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    },[]);

    const [items, setItems] = useState([
        { id: 0, name: '0', code: getRandomColor() },
        { id: 1, name: '1', code: getRandomColor() },
        { id: 2, name: '2', code: getRandomColor() },
        { id: 3, name: '3', code: getRandomColor() },
        { id: 4, name: '4', code: getRandomColor() },
        { id: 5, name: '5', code: getRandomColor() },
        { id: 6, name: '6', code: getRandomColor() },
        { id: 7, name: '7', code: getRandomColor() },
        { id: 8, name: '8', code: getRandomColor() },
    ]);


    const _renderItem = ({item}) => {
        return(
            <Pressable onPress={() => {
                setItems(pS => pS.filter(e => e?.id != item?.id))
            }} style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Text style={styles.itemName}>{item.name}</Text>
            </Pressable>
        )
    }

    return (
        <FlatGrid
            itemDimension={130}
            data={items}
            style={styles.gridView}
            spacing={10}
            renderItem={_renderItem}
        />
    );
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 45,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});