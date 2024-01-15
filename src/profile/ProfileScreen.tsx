import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text} from 'react-native';
import {ProfileStackNavigation, ProfileStackParamList} from '../types';

const ProfileScreen = () => {
  const {navigate} = useNavigation<ProfileStackNavigation>();
  return (
    <>
      <Text>Profile Screen</Text>
      <Button
        title="Profile Details"
        onPress={() => navigate('ProfileDetails')}
      />
    </>
  );
};

export default ProfileScreen;
