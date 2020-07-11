/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>UK Phonics App</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
