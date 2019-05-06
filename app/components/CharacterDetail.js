import React from 'react';
import { View, Text } from 'react-native';

export default class CharacterDetail extends React.Component {
    static navigationOptions = {
        title: 'Detail',
    };
    render() {
        return <View><Text>{`Info about ${this.props.navigation.getParam("character")} here!`}</Text></View>
    }
}