/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import CardDeck from './app/components/CardDeck';
import PhonicsCard from './app/components/PhonicsCard';

const cards = [
  {name: 'a', imageSrc: require('./app/images/a.png'), index: 0},
  {name: 'b', imageSrc: require('./app/images/b.png'), index: 1},
  {name: 'c', imageSrc: require('./app/images/c.png'), index: 2},
  {name: 'd', imageSrc: require('./app/images/d.png'), index: 3},
  {name: 'e', imageSrc: require('./app/images/e.png'), index: 4},
  {name: 'f', imageSrc: require('./app/images/f.png'), index: 5},
  {name: 'a', imageSrc: require('./app/images/a.png'), index: 6},
  {name: 'b', imageSrc: require('./app/images/b.png'), index: 7},
  {name: 'c', imageSrc: require('./app/images/c.png'), index: 8},
  {name: 'd', imageSrc: require('./app/images/d.png'), index: 9},
  {name: 'e', imageSrc: require('./app/images/e.png'), index: 10},
  {name: 'f', imageSrc: require('./app/images/f.png'), index: 11},
];

export default class App extends Component {
  state = {
    showCard: false,
    showCardIndex: 0,
  };

  handleOnCardPress(item) {
    this.setState({showCard: true, showCardIndex: item.index});
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView>
            <View>
              <Text>UK Phonics App</Text>
              {this.state.showCard ? (
                <CardDeck cards={cards} cardIndex={this.state.showCardIndex} />
              ) : (
                <FlatGrid
                  itemDimension={100}
                  data={cards}
                  renderItem={({item}, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() => this.handleOnCardPress(item)}>
                      <PhonicsCard card={item} />
                    </TouchableOpacity>
                  )}
                />
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
