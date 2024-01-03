import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/action/counter.action';

export default function Counter() {
    const dispatch = useDispatch();
    
    const handleInc = () => {
        dispatch(increment());
    }

    const counter = useSelector(state => state.counter);

    console.log(counter);
    return (
        <View>
            <Text>Counter</Text>

            <TouchableOpacity onPress={() => handleInc()}>
                <Text>+</Text>
            </TouchableOpacity>

            <Text>{counter.count}</Text>
        </View>
    )
}