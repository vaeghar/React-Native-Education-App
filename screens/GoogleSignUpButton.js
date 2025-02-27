import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import googleLogo from '../assets/google-logo.png'; // Ensure you have a Google logo image in assets

export default function GoogleSignUpButton({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#DDDDDD',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          opacity: pressed ? 0.7 : 1, // Adds a pressed effect
        },
      ]}
    >
      <Image
        source={googleLogo}
        style={{ width: 24, height: 24, marginRight: 10 }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 16, fontWeight: '500', color: '#333' }}>
        Sign up with Google
      </Text>
    </Pressable>
  );
}
