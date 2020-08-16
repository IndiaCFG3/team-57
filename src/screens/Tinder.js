import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder,
  ScrollView,
  TextInput,
  Button,
  Alert,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/Ionicons';

//   We create a variable named rotate. In this variable, we will call interpolate() on this.position. interpolate()is a method that is available to be called on any Animated.Value and it interpolates
// the value of the coordinate, before updating the UI property (e.g. mapping 0–1 to 0–100).
// So in our example:
// inputRange is a length of the area that the animation can reach. The first value is for moving to the left, the second value is an initial value, the third value is for moving right.

//  outputRange when moving right the card will drop -10 deg and when moving left the card will drop 10 degrees. The second variable is the initial value, and extrapolate is used to prevent the output value from exceeding outputRange.
class Tinder extends Component {
  constructor() {
    super();
    console.disableYellowBox = true;
    this.state = {
      type: '',
      url: '',
      show:false,
      team:'',
      classPresence:0,
    initiative:0,
    mentoring:0,
    confidence:0,
    leadership:0,
    subject:"",
    studentsPresent:0,
    description:''
    };
  }
  // componentDidMount() {
  //   fetch('https://uniquejinit.herokuapp.com/teams').then(data => {console.log(data)})
  // }
  upload = () => {
    fetch('https://uniquejinit.herokuapp.com/upload', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        type: this.state.type,
        url: this.state.url,
      }),
    })
      .then(response => response)
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          Alert.alert('Video uploaded');
          console.log(data);
        }
      });
  };
uploadForm=()=>{
  fetch('https://uniquejinit.herokuapp.com/evalForm', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      team:this.state.team,
      classPresence:this.state.classPresence,
      initiative:this.state.initiative,
      mentoring:this.state.mentoring,
      confidence:this.state.confidence,
      leadership:this.state.leadership,
      subject:this.state.subject,
      description:this.state.description,
      studentsPresent:this.state.studentsPresent,
    }),
  })
    .then(response => response)
    .then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        Alert.alert('form uploaded');
        console.log(data);
      }
    });
};
  render() {
    return (
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://www.youtube.com/');

          }}
          style={{marginTop:10}}
          >
          <Text style={{fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>
            Open Youtube
          </Text>
        </TouchableOpacity>
        <View
          style={{
            margin: 30,
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>
            Upload youtube video links for students
          </Text>
          <View style={{marginTop: 20, justifyContent: 'space-evenly'}}>
            <TextInput
              placeholder="URL"
              onChangeText={text => this.setState({url: text})}
              value={this.state.url}
              underlineColorAndroid="black"
            />
            <TextInput
              placeholder="SUBJECT"
              onChangeText={text => this.setState({type: text})}
              value={this.state.type}
              underlineColorAndroid="black"
            />

            <Button title="Upload Video" onPress={this.upload} />
          </View>
        </View>
        <View
          style={{
            margin: 30,
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 10,
          }}>
          <TouchableOpacity onPress={() =>{this.setState({show:!this.state.show})}}><Text style={{fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>
            Evaluate Form for team
          </Text></TouchableOpacity>
          {this.state.show&&<View style={{marginTop: 20, justifyContent: 'space-evenly'}}>
            
   
            <TextInput
              placeholder="TEAM NAME"
              onChangeText={text => this.setState({name: text})}
              value={this.state.name}
              underlineColorAndroid="black"
            />
            <TextInput
              placeholder="INITIATIVE"
              onChangeText={text => this.setState({ initiative: text})}
              keyboardType="number-pad"
              value={this.state.initiative}
              underlineColorAndroid="black"
            />
            <TextInput
              placeholder="CLASS PRESENCE"
              onChangeText={text => this.setState({classPresence: text})}
              keyboardType="number-pad"
              value={this.state.classPresence}
              underlineColorAndroid="black"
            />
            <TextInput
              placeholder="MENTORING"
              onChangeText={text => this.setState({mentoring: text})}
              keyboardType="number-pad"
              value={this.state.mentoring}
              underlineColorAndroid="black"
            />
            <TextInput
              placeholder="CONFIDENCE"
              onChangeText={text => this.setState({confidence: text})}
              keyboardType="number-pad"
              value={this.state.confidence}
              underlineColorAndroid="black"
            />
            <TextInput
              placeholder="LEADERSHIP"
              onChangeText={text => this.setState({leadership: text})}
              keyboardType="number-pad"
              value={this.state.leadership}
              underlineColorAndroid="black"
            />
            <TextInput
              placeholder="STUDENTS PRESENT"
              onChangeText={text => this.setState({studentsPresent: text})}
              value={this.state.studentsPresent}
              underlineColorAndroid="black"
              keyboardType="number-pad"
            />
            <TextInput
              placeholder="SUBJECT"
              onChangeText={text => this.setState({subject: text})}
              value={this.state.subject}
              underlineColorAndroid="black"
            />
             <TextInput
              placeholder="DESCRIPTION"
              onChangeText={text => this.setState({description: text})}
              value={this.state.description}
              underlineColorAndroid="black"
            />

            <Button title="Update Form" onPress={this.uploadForm} />
          </View>}
        </View>
      </ScrollView>
    );
  }
}
export default Tinder;
const styles = StyleSheet.create({
  like: {
    borderWidth: 2,
    borderColor: 'green',
    color: 'green',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,
  },
  no: {
    borderWidth: 1,
    borderColor: 'red',
    color: 'red',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,
  },
});
