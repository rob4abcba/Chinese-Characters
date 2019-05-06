import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Button, Alert, TextInput, Keyboard, FlatList, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';

export default class CharacterList extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor() {
    super();
    this.scrollViewRef = React.createRef();
    this.state = {
      characters: ['久', '未', '放', '晴', '的', '天', '空'],
      more_characters: ['晴', '的', '天', '空'],
    }
  }
  _onPressAddCharacter = () => {
    const newCharacters = this.state.characters;
    newCharacters.push(this.state.newCharacterSymbol);
    this.setState({
      characters: newCharacters,
      newCharacterSymbol: ''
    })
    this._scrollToBottom();
  };

  _onChangeCharacterSymbol = (text) => {
    this.setState({ newCharacterSymbol: text });
  }

  _scrollToBottom = () => {
    setTimeout(() => {
      this.scrollViewRef.current.scrollToEnd();
    }, 500);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          ref={this.scrollViewRef}
          data={this.state.characters}
          renderItem={({ item }) =>
            <TouchableHighlight onPress={() => {
              this.props.navigation.navigate('Detail', { character: item });
            }} >
              <Text style={styles.character}>
                Yo {item} My {item}
              </Text>
            </TouchableHighlight>
          }
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        />

        <TextInput
          style={styles.textInput}
          placeholder='Click here to add to list.'
          value={this.state.newCharacterSymbol}
          onChangeText={this._onChangeCharacterSymbol}
          returnKeyType="done"
          onFocus={this._scrollToBottom}
          blurOnSubmit={false}
          onSubmitEditing={this._onPressAddCharacter}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    //padding: 20,
    //paddingTop: 2,
    backgroundColor: 'orange',
  },
  character: {
    marginHorizontal: 5,
    marginVertical: 2,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    fontSize: 28,
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderTopColor: 'green',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  itemSeparator: {
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderTopColor: 'green',
    borderBottomColor: 'red',
    borderTopWidth: StyleSheet.hairlineWidth,
  }

});

