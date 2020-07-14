import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import EditProfile from './Profile/EditProfile'
import ViewProfile from './Profile/ViewProfile'

const ProfileStack = createStackNavigator();

const Profile = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="ViewProfile" component={ViewProfile} />
            <ProfileStack.Screen name="EditProfile" component={EditProfile} />
        </ProfileStack.Navigator>
    )
}

export default Profile