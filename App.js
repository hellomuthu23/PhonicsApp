/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Card, Header } from 'react-native-elements';
import { FlatGrid } from 'react-native-super-grid';

import CardDeck from './app/components/CardDeck';

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

  handleOnHeaderPress() {
    this.setState({showCard: false, showCardIndex: 0});
  }
  render() {
    return (
      <>
        <Header
          leftComponent={{
            icon: 'home',
            color: '#fff',
            onPress: () => this.handleOnHeaderPress(),
          }}
          centerComponent={{text: 'UK Phonics', style: {color: '#fff'}}}
        />
        <ScrollView>
          <View>
            {this.state.showCard ? (
              <CardDeck cards={cards} cardIndex={this.state.showCardIndex} />
            ) : (
              <FlatGrid
                itemDimension={150}
                data={cards}
                renderItem={({item}, i) => (
                  <TouchableOpacity
                    key={i}
                    onPress={() => this.handleOnCardPress(item)}>
                    <Card
                      image={item.imageSrc}
                      imageProps={{resizeMode: 'contain'}}
                    />
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
        </ScrollView>
      </>
    );
  }
}
