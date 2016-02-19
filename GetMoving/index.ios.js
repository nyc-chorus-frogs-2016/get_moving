/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var events = [
{ name:'Dentist Appointment', startTime: '11:00AM', location: '43 Willow St.' },
{ name:'Work', startTime: '9:00AM', location: '48 Wall St.'},
{ name:'Meet John for drinks', startTime: '7:00PM', location: '32 Main St.' },
];

// { name:'Dentist Appointment', startTime: newDate('02-19-2016T16:00:00-500') },
// { name:'Work', startTime: newDate('02-19-2016T09:00:00-500') },
// { name:'Meet John for drinks', startTime: newDate('02-18-2016T19:00:00-500') },
// ];

// var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
// var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
// var PAGE_SIZE = 25;
// var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
// var REQUEST_URL = API_URL + PARAMS;

class GetMoving extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(events),
      loaded: true,
    });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderEvent}
        style={styles.listView}/>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Events...
        </Text>
      </View>
    );
  }

  renderEvent(event) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri:"https://lh5.ggpht.com/-oMUKnGIr7IUeAQaNoaY0VLJ5N_6lEZC7sSOS9tRm7W72ICH8I1-DVo-ovaODRMLlU0=w300" }}
          // "https://upload.wikimedia.org/wikipedia/commons/4/47/Comic_image_missing.png"
          style={styles.thumbnail}/>
        <View style={styles.rightContainer}>
          <Text style={styles.name}>{event.name}</Text>
          <Text style={styles.time}>Time: {event.startTime}</Text>
          <Text style={styles.location}>Location: {event.location}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // borderWidth: 0.5,
    // borderColor: '#d6d7da',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  time: {
    textAlign: 'center',
  },
  location: {
    textAlign: 'center',
  },
  thumbnail: {
    margin: 5,
    width: 60,
    height: 60,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('GetMoving', () => GetMoving);
