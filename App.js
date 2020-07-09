import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, Alert, ActionSheetIOS } from 'react-native';
import {Feather, AntDesign, Entypo, Ionicons} from '@expo/vector-icons';

const BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_COLOR = 'rgb(120,213,250)';
const imgData = [
  {id: 1, imgSource: require('./assets/1.jpg')},
  {id: 2, imgSource: require('./assets/1.jpg')},
  {id: 3, imgSource: require('./assets/1.jpg')},
  {id: 4, imgSource: require('./assets/1.jpg')},
  {id: 5, imgSource: require('./assets/1.jpg')},
  {id: 6, imgSource: require('./assets/1.jpg')},
  {id: 7, imgSource: require('./assets/1.jpg')},
  {id: 8, imgSource: require('./assets/1.jpg')},
  {id: 9, imgSource: require('./assets/1.jpg')},
  {id: 7, imgSource: require('./assets/1.jpg')},
  {id: 8, imgSource: require('./assets/1.jpg')},
  {id: 9, imgSource: require('./assets/1.jpg')},
];
const centerImg = Math.floor(imgData.length / 3); 


export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navbarContainer}>

          <TouchableOpacity style={styles.buttonHeader}>
            <AntDesign name="arrowleft" size={32} color="gray" style={{marginTop:7}} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonHeader}>
            <Entypo name="dots-three-vertical" size={24} color="gray" style={{marginTop:6}} />
          </TouchableOpacity>

        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('./assets/avatar.png')} style={styles.avatarImg}/>
        </View>     
        <View style={styles.headerRight}>

          <Text style={styles.nameText}>Do Trung Duc</Text>
          <Text style={styles.jobText}>Student</Text>

          <View style={styles.button}>

            <TouchableOpacity style={styles.followButton} 
              onPress={() => {setCount(count + 1); Alert.alert("Followed")}}
             > 
            <Text style={styles.followText}>Follow</Text>
            
            </TouchableOpacity>

            <TouchableOpacity style={styles.sendButton}
            onPress={() => Alert.alert("Message sent!")}>
              {<Feather name="send" size={19} color="white" />}
            </TouchableOpacity>
            
          </View>

        </View>
      </View>

      <View style={styles.line}></View>

      <View style={styles.count}>
        <View style={styles.countPhotos}>
            <Text style={styles.nameText}>{imgData.length}</Text>
            <Text style={styles.jobText}>Photos</Text>
        </View>
        <View style={styles.countFollowers}>
            <Text style={styles.nameText}>{count}</Text>
            <Text style={styles.jobText}>Followers</Text>
        </View>
        <View style={styles.countFollowing}>
            <Text style={styles.nameText}>7</Text>
            <Text style={styles.jobText}>Following</Text>
        </View>
      </View>

    {/* <ScrollView style={{
      flex: 0.6,
    }}>
      <View style={styles.imagesGroup}>
        <View style={{flexDirection: 'column'}}>
            {imgData.slice(0, centerImg).map(item => {
              return(
                <Image source={item.imgSource} style={styles.images}></Image>
              )
            })}
        </View>

        <View style={{flexDirection: 'column'}}>
            {imgData.slice(centerImg, centerImg*2).map(item => {
              return(
                <Image source={item.imgSource} style={styles.images}></Image>
              )
            })}
        </View>

        <View style={{flexDirection: 'column'}}>
            {imgData.slice(centerImg*2).map(item => {
              return(
                <Image source={item.imgSource} style={styles.images}></Image>
              )
            })}
        </View>

      </View>         
    </ScrollView> */}

    <ScrollView 
    style={{flex: 0.6}}>
        <View>
          
        </View>
    </ScrollView>

    <View style={styles.footer}>
      <TouchableOpacity>
          <AntDesign style={styles.footerIcons} name="picture" size={35} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
          <Ionicons style={styles.footerIcons} name="md-add-circle-outline" size={38} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
          <Feather style={styles.footerIcons} name="user" size={36} color="black" />
      </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flex: 0.11,
    marginTop: 20,
    justifyContent: "center", 
  },
  navbarContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width:390,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header: {
    flex: 0.3,
    flexDirection: "row",
    marginTop: 5,
  },
  count: {
    borderTopWidth: 0.5,
    borderColor: 'lightgray',
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 17,
  },
  imagesGroup: {
    flex: 0.55,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: 'gray',
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 42,
  },  
  avatarImg: {
    width: 100,
    height: 100,
    marginLeft:15
  },
  headerLeft: {
    flex: 0.43,
    alignItems: 'center',
  },
  headerRight: {
    flex: 0.57,
  },
  button: {
    flexDirection: "row",
    marginTop: 18,
  },
  followButton: {
    backgroundColor: 'blue',
    width: 110,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.62,
    elevation: 4,
  },
  sendButton: {
    borderRadius: 30,
    marginLeft: 11,
    backgroundColor: SEND_COLOR,
    width: 56,
    height: 30,
    paddingTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 4,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'black',
    marginBottom: 5,
  },
  jobText: {
    fontSize: 12.8,
    fontWeight: '400',
    color: 'gray'
  },
  followText: {
    color: FOLLOW_COLOR,
    fontSize: 12.8,
    color: 'white',
    fontWeight: '500'
  },
  countPhotos: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center"
  },
  countFollowers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  countFollowing: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },

  //Images container
  images: {
    margin: 1.2,
  },
  footerIcons: {
    marginTop: 5,
    marginLeft: 38,
    marginRight: 38,
  },
  // line: {
  //   height: 1,
  //   backgroundColor: 'lightgray',
  //   flexDirection: 'row',
  // }



});
