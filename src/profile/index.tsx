import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { Text } from "react-native"
import { ProfileStackParamList } from "../types"
import ProfileScreen from "./ProfileScreen"
import ProfileDetailsScreen from "./ProfileDetailsScreen"

const ProfileNavigationContainer = () =>{
    const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();
    return(
            <ProfileStack.Navigator screenOptions={{headerShown:false}}>
                <ProfileStack.Screen name='Profile' component={ProfileScreen}/>
                <ProfileStack.Screen name='ProfileDetails' component={ProfileDetailsScreen}/>
            </ProfileStack.Navigator>
    )
}

export default ProfileNavigationContainer;