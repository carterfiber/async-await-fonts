import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
      await Font.loadAsync({
      'Raleway-Thin': require('./assets/fonts/Raleway-Thin.ttf'),
      'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.fontLoaded ? (
          <View style={styles.container}>
            <Text style={[styles.josefinSans2]}>
              God Bless America
            </Text>
            <Text style={[styles.josefinSans]}>
              And The Marginalized.
            </Text>
          </View>
        ) : null
      }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  josefinSans: {
    fontSize: 20,
    fontFamily: 'Raleway-Thin',
  },
  josefinSans2: {
    fontSize: 10,
    fontFamily: 'Raleway-Medium',
  }
});
