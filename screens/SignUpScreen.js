import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { images } from '../assets';
import Button from '../components/button';
import Input from '../components/input';
import { EyeIcon } from 'react-native-heroicons/solid';
import googleLogo from '../assets/google-logo.png'; // Ensure Google logo is available

const { signup } = images;

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  const handleSubmit = () => {
    console.log('User Data --> ', userData);
    navigation.navigate('SelectGrade', { userData });
  };

  const handleGoogleSignUp = () => {
    console.log('Google Sign-Up Pressed!');
    // Add Google OAuth authentication logic here
  };

  return (
    <SafeAreaView className="flex-1 bg-bgWhite px-8">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 justify-center"
      >
        {/** ====================== Image ============================= */}
        <View className="flex-row justify-center mb-6">
          <Image source={signup} style={{ width: 353, height: 235 }} />
        </View>

        {/** ====================== Sign Up inputs ============================= */}
        <View className="w-full items-center pb-5"> 
          <Input
            label="Name"
            placeholder="Your name"
            value={userData.name}
            onChange={(text) => handleInputChange('name', text)}
          />
          <Input
            label="Email address"
            placeholder="name@example.com"
            value={userData.email}
            onChange={(text) => handleInputChange('email', text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            label="Password"
            placeholder="**********"
            value={userData.password}
            onChange={(text) => handleInputChange('password', text)}
            secureTextEntry={true}
            Icon={EyeIcon}
            last
          />
        </View>

        {/** ====== Google Sign Up Button (Added Padding Above) ======= */}
        <View style={{ paddingBottom: 20 }}> 
          <Pressable
            onPress={handleGoogleSignUp}
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
                opacity: pressed ? 0.7 : 1,
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
        </View>

        {/** ====== Action button -> Navigation to grade selection screen ======= */}
        <Button
          primaryBtnText="Sign Up"
          onPrimaryBtnPress={handleSubmit}
          secondaryBtnText1="Already have an account?"
          secondaryBtnText2="Sign In"
          onSecondaryBtnPress={() => navigation.navigate('SignIn')}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
