import React,{useRef} from "react"
import {View,StyleSheet,Text,Animated,LayoutAnimation,Platform,UIManager} from "react-native"
import { useEffect } from "react/cjs/react.production.min";

const ListItem = ({item,onPress}):React.FC => {

   // const fadeOut = useRef(new Animated.Value(1)).current
   const fadeOut = new Animated.Value(0) 

   const flipStyle = {
    transform: [
      { rotateY: fadeOut.interpolate( {
        inputRange: [ 0, 100 ],
        outputRange: [ "0deg", "-180deg" ]
      } )
    }
    ]
  }

  const interpolatedRotateAnimation = fadeOut.interpolate( {
    inputRange: [ 0, 100 ],
    outputRange: [ "0deg", "-45deg" ]
  } );

 const interpolatedRotateX = fadeOut.interpolate( {
    inputRange: [ 0, 100 ],
    outputRange: [ 0, -50 ]
  } );

  
    return (
        <Animated.View style={[styles.itemContainer, { backgroundColor: item.code },{transform:[{rotateY:interpolatedRotateAnimation}]}]}>
            <Text onPress={() => {
                Animated.timing(fadeOut, {
                  toValue: 180,
                  duration: 300,
                  useNativeDriver: true,
                }).start(() => {
                  // remove the item from the data source after the animation is finished
                //   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                  onPress(item?.id)
                });
                
            }} style={styles.itemName}>{item.name}</Text>
        </Animated.View>
    )
};

export default ListItem;

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