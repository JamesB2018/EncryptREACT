/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//import React, {Fragment} from 'react';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Base64} from 'js-base64';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      passwordHolder: '',
      showData: '',
    };
  }

  encryptPassword = () => {
    var encode = Base64.encode(this.state.passwordHolder);
    this.setState({showData: encode});
  };

  decryptPassword = () => {
    var decode = Base64.decode(this.state.showData);
    this.setState({showData: decode});
  };

  render() {
    return (
      <View style={styles.Container}>
        <TextInput
          placeholder="Enter Password Here"
          onChangeText={data => this.setState({passwordHolder: data})}
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
        />

        <TouchableOpacity style={styles.button} onPress={this.encryptPassword}>
          <Text style={styles.text}>Click to Encode Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.decryptPassword}>
          <Text style={styles.text}>Click to Decode Password</Text>
        </TouchableOpacity>

        <Text style={{fontSize: 20, textAlign: 'center', marginTop: 10}}>
          {this.state.showData}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    textAlign: 'center',
    height: 42,
    width: '80%',
    borderWidth: 1,
    borderColor: '#9e9e9e',
    borderRadius: 7,
  },
  button: {
    width: '80%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#ec407a',
    borderRadius: 3,
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
});
