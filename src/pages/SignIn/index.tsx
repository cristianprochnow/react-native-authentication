import React from 'react';

import { signIn } from '../../services/auth';

import { View, Button, StyleSheet } from 'react-native';

const SignIn: React.FC = () => {
  async function handleSignIn() {
    const response = await signIn();

    console.log(response);
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
