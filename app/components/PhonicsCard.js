import { Card, CardItem } from 'native-base';
import React, { Component } from 'react';
import { Image } from 'react-native';

export default class PhonicsCard extends Component {
  render() {
    return (
      <Card>
        <CardItem cardBody>
          <Image
            source={this.props.card.imageSrc}
            style={{resizeMode: 'contain', height: 200, width: null, flex: 1}}
          />
        </CardItem>
      </Card>
    );
  }
}
