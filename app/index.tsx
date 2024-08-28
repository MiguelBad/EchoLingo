import { View, Text, Button } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { Link, router } from 'expo-router';

export const UserTypeContext = createContext('');

export default function Index() {

    const login = (type: string, name: string) => {
        router.push({
            pathname: '/(tabs)',
            params: {
                userType: type,
                userName: name,
            }
        })
    }

    return (
        <View>
            <Button
                onPress={() => login('student', 'Student')}
                title='Student View' />
            <Button
                onPress={() => login('teacher', 'Teacher')}
                title='Teacher View'/>
        </View>
    )
}
