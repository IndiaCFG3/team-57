import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Text,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import {List, Divider} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import Loading from '../components/Loading';

export default function HomeScreen({navigation}) {
  //teacher

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [school, setSchool] = useState('');
  //student
  const [studName, setstudName] = useState('');
  const [studemail, setstudEmail] = useState('');
  const [studpassword, setstudPassword] = useState('');
  const [std, setStd] = useState(7);
  const [studsch, setstudsch] = useState('');
  //team1
  const [studName1, setstudName1] = useState('');

  //team2
  const [studName2, setstudName2] = useState('');

  //teamname
  const [teamName, setteamName] = useState('');

  function teacher() {
    if (!name || !email || !password || !school) {
      return Alert.alert('Please enter all fields');
    }
    fetch('https://uniquejinit.herokuapp.com/signup/teacher', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
        school,
        role: 'teacher',
      }),
    })
      .then(response => response)
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          Alert.alert('Teacher created');
          console.log(data);
          setName('');
          setEmail('');
          setPassword('');
          setSchool('');
        }
      });
  }
  function student() {
    fetch('https://uniquejinit.herokuapp.com/signup/studentTeacher', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: studName,
        email: studemail,
        password: studpassword,
        school: studsch,
        standard: std,
        role: 'student',
      }),
    })
      .then(response => response)
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data);
          setstudName('');
          setstudEmail('');
          setstudPassword('');
          setStd(7);
          setstudsch('');
        }
      });
  }
  function team() {
    fetch('https://uniquejinit.herokuapp.com/maketeam', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        teamName: teamName,
        name1: studName1,
        name2: studName2,
      }),
    })
      .then(response => response)
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data);
          Alert.alert('Team created');
           setstudName1('');

          //team2
           setstudName2('');
        
          //teamname
          setteamName('');
        }
      });
  }

  /**
   * Fetch threads from Firestore
   */
  useEffect(() => {}, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" />

      <ScrollView>
        <View
          style={{
            margin: 30,
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>
            CREATE TEACHER
          </Text>
          <View style={{marginTop: 20, justifyContent: 'space-evenly'}}>
            <TextInput
              placeholder="NAME"
              onChangeText={text => setName(text)}
              value={name}
              underlineColorAndroid="black"
            />
            <TextInput
              placeholder="EMAIL"
              onChangeText={text => setEmail(text)}
              value={email}
              underlineColorAndroid="black"
            />
            <TextInput
              placeholder="PASSWORD"
              onChangeText={text => setPassword(text)}
              value={password}
              underlineColorAndroid="black"
            />
            <TextInput
              placeholder="SCHOOL NAME"
              onChangeText={text => setSchool(text)}
              value={school}
              underlineColorAndroid="black"
            />
            <Button title="Create Teacher" onPress={teacher} />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 30,
            backgroundColor: '#fff',
            marginTop: 20,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>
            CREATE STUDENT
          </Text>
          <View style={{marginTop: 20, justifyContent: 'space-evenly'}}>
            <TextInput
              placeholder="NAME"
              onChangeText={text => setstudName(text)}
              value={studName}
              underlineColorAndroid="black"
            />
            <TextInput
              placeholder="EMAIL"
              onChangeText={text => setstudEmail(text)}
              value={studemail}
              underlineColorAndroid="black"
            />
            <TextInput
              placeholder="PASSWORD"
              onChangeText={text => setstudPassword(text)}
              value={studpassword}
              underlineColorAndroid="black"
            />
            <TextInput
              placeholder="STANDARD"
              keyboardType="numeric"
              onChangeText={text => setStd(text)}
              value={std}
              underlineColorAndroid="black"
            />
            <TextInput
              placeholder="SCHOOL"
              onChangeText={text => setstudsch(text)}
              value={studsch}
              underlineColorAndroid="black"
            />

            <Button title="Create" onPress={student} />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 30,
            backgroundColor: '#fff',
            marginTop: 20,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>
            CREATE TEAM
          </Text>

          <View style={{marginTop: 20, justifyContent: 'space-evenly'}}>
            <TextInput
              placeholder="TEAM NAME"
              onChangeText={text => setteamName(text)}
              value={teamName}
              underlineColorAndroid="black"
            />
            <Text style={{fontSize: 20, textAlign: 'left', fontWeight: 'bold'}}>
              Student 1
            </Text>

            <TextInput
              placeholder="NAME"
              onChangeText={text => setstudName1(text)}
              value={studName1}
              underlineColorAndroid="black"
            />

            <Text style={{fontSize: 20, textAlign: 'left', fontWeight: 'bold'}}>
              Student 2
            </Text>
            <TextInput
              placeholder="NAME"
              onChangeText={text => setstudName2(text)}
              value={studName2}
              underlineColorAndroid="black"
            />

            <Button title="Create" onPress={team} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  listTitle: {
    fontSize: 22,
  },
  listDescription: {
    fontSize: 16,
  },
});
