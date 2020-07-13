import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import Swiper from 'react-native-swiper';

export default class CardDeck extends Component {
  render() {
    return (
      <Swiper height={600} index={this.props.cardIndex}>
        {this.props.cards.map((item, i) => (
          <Card
            key={i}
            image={item.imageSrc}
            imageProps={{resizeMode: 'contain'}}
            imageStyle={{height: '85%'}}
          />
        ))}
      </Swiper>
    );
  }
}
