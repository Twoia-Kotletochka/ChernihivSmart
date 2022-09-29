import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import SignUp from './pages/SignUp';

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;


  if (!user) {
    return (
      <SignUp />
    );
  }

  return (
    <View>
      <Text>Welcome {user.uid}</Text>
    </View>
  );
}

