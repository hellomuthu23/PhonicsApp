import { View } from 'native-base';
import React, { Component } from 'react';
import Swiper from 'react-native-swiper';

import PhonicsCard from './PhonicsCard';

export default class CardDeck extends Component {
  render() {
    return (
      <Swiper index={this.props.cardIndex}>
        {this.props.cards.map((item, key) => (
          <View key={key} style={item.css}>
            <PhonicsCard card={item} />
          </View>
        ))}
      </Swiper>
    );
  }
}
