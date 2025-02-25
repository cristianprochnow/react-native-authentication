import React from 'react';

import { useAuth } from '../../contexts/auth';

import { View, Button, StyleSheet } from 'react-native';

const SignIn: React.FC = () => {
  const { signed, user, signIn } = useAuth();

  console.log(signed);
  console.log(user);

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
