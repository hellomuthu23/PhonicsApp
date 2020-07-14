/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
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
  {name: 'g', imageSrc: require('./app/images/g.png'), index: 6},
  {name: 'h', imageSrc: require('./app/images/h.png'), index: 7},
  {name: 'i', imageSrc: require('./app/images/i.png'), index: 8},
  {name: 'j', imageSrc: require('./app/images/j.png'), index: 9},
  {name: 'k', imageSrc: require('./app/images/k.png'), index: 10},
  {name: 'l', imageSrc: require('./app/images/l.png'), index: 11},
  {name: 'm', imageSrc: require('./app/images/m.png'), index: 12},
  {name: 'n', imageSrc: require('./app/images/n.png'), index: 13},
  {name: 'o', imageSrc: require('./app/images/o.png'), index: 14},
  {name: 'p', imageSrc: require('./app/images/p.png'), index: 15},
  {name: 'q', imageSrc: require('./app/images/q.png'), index: 16},
  {name: 'r', imageSrc: require('./app/images/r.png'), index: 17},
  {name: 's', imageSrc: require('./app/images/s.png'), index: 18},
  {name: 't', imageSrc: require('./app/images/t.png'), index: 19},
  {name: 'u', imageSrc: require('./app/images/u.png'), index: 20},
  {name: 'v', imageSrc: require('./app/images/v.png'), index: 21},
  {name: 'w', imageSrc: require('./app/images/w.png'), index: 22},
  {name: 'x', imageSrc: require('./app/images/x.png'), index: 23},
  {name: 'y', imageSrc: require('./app/images/y.png'), index: 24},
  {name: 'z', imageSrc: require('./app/images/z.png'), index: 25},
];
export default class App extends Component {
  state = {
    showCard: false,
    showCardIndex: 0,
    autoplay: false,
  };

  handleOnCardPress(item) {
    this.setState({showCard: true, showCardIndex: item.index, autoplay: false});
  }

  handleOnHeaderPress() {
    this.setState({showCard: false, showCardIndex: 0, autoplay: false});
  }

  autoplay() {
    this.setState({showCard: true, showCardIndex: 0, autoplay: true});
  }
  render() {
    return (
      <>
        <SafeAreaView>
          <Header
            leftComponent={{
              icon: 'home',
              color: '#fff',
              onPress: () => this.handleOnHeaderPress(),
            }}
            centerComponent={{text: 'UK Phonics', style: {color: '#fff'}}}
            rightComponent={{
              icon: 'play-arrow',
              color: '#fff',
              onPress: () => this.autoplay(),
            }}
          />
          <ScrollView>
            <View>
              {this.state.showCard ? (
                <CardDeck
                  cards={cards}
                  autoplay={this.state.autoplay}
                  cardIndex={this.state.showCardIndex}
                />
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
        </SafeAreaView>
      </>
    );
  }
}
