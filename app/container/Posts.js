import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../redux/action/posts.action';

export default function Posts() {
    const dispatch = useDispatch();

    const posts = useSelector(state => state.posts);

    console.log(posts);

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <ScrollView>
            {
                posts.posts.map((v) => (
                    <Text key={v.id}>{v.title}</Text>
                ))
            }
        </ScrollView>
    )
}