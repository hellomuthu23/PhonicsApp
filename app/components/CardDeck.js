import React, { Component } from 'react';
import { Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default class CardDeck extends Component {
  render() {
    return (
      <Swiper index={this.props.cardIndex}>
        {this.props.cards.map((item, i) => (
          <Image
            key={i}
            source={item.imageSrc}
            style={{resizeMode: 'contain', height: '70%'}}
          />
        ))}
      </Swiper>
    );
  }
}
