import React, { Component } from 'react';
import { Card } from 'react-native-elements';

export default class PhonicsCard extends Component {
  render() {
    return (
      <Card
        image={this.props.card.imageSrc}
        imageProps={{resizeMode: 'contain'}}
      />
    );
  }
}
