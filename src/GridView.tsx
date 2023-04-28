import React, { useCallback, useState,useRef } from 'react';
import { StyleSheet, View, Text, Pressable, Animated,LayoutAnimation,Platform,UIManager } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import ListItem from './ListItem';

if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

export default function GridView() {

    const getRandomColor = useCallback(() => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }, []);

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


    

    return (
        <FlatGrid
            itemDimension={130}
            data={items}
            style={styles.gridView}
            spacing={10}
            renderItem={({item}) => <ListItem item={item} onPress={id => {
                
                setItems(pS => pS.filter(e => e?.id != id))
                LayoutAnimation.configureNext({
                    duration: 600,
                    // update: {
                    //   type: LayoutAnimation.Types.linear, 
                    //   property: LayoutAnimation.Properties.scaleXY,
                    // },
                    delete: {
                      duration: 800,
                      delay:100,
                      type: LayoutAnimation.Types.linear,
                      property: LayoutAnimation.Properties.scaleXY,
                    },
                  });
            }}/>}
            customFlatList={Animated.FlatList}
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