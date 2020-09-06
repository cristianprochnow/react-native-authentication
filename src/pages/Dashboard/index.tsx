import React from 'react';

import { useAuth } from '../../contexts/auth';

import { View, Button, StyleSheet, Text } from 'react-native';

const Dashboard: React.FC = () => {
  const { logOut, user } = useAuth();

  function handleLogOut() {
    logOut();
  }

  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Button title="Log Out" onPress={handleLogOut} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
