var React = require('react-native');
var CoreStyle = require('./CoreStyle.js');
var {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Navigator
} = React;
var {
  CustomPrevButton,
  CustomPlusButton
} = CoreStyle;

var Parse = require('parse').Parse;

// App views
var Views = {};
Views.Notes = require('./Notes.js');
Views.AddNote = require('./AddNote.js');

var HomeView = React.createClass({
  getInitialState() {
    return {

    }
  },

  notesPressed() {
    this.props.navigator.push({
      navBar: true,
      title: 'Notes',
      component: Views.Notes,
      hidePrev: false,
      customNext: <CustomPlusButton plusView={Views.AddNote} title={'Add Note'}/>,
    });
  },

  render() {
    return (<View style={styles.background}>
        <View style={styles.backgroundOverlay} />
        <View style={styles.contentContainer}>
          <TouchableHighlight onPress={this.notesPressed}>
            <Image
              style={styles.button}
              source={require('image!noteIcon')}
            />
          </TouchableHighlight>

        </View>
      </View>)
  }
});

var styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  backgroundOverlay: {
    opacity: 0.85,
    backgroundColor: '#ffffff',
  },
  background: {
    flex: 1
  },
  name: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 15,
    alignSelf: 'center',
  },
  button: {
    flex: 1,
    width: 38,
    height: 38,
  }
});

module.exports = HomeView;
