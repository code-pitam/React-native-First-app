import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const FirstPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bImage}>
        <Image style={styles.mImg} source={require('../img/Ellipse1.png')} />
      </View>
      <View style={styles.sText}>
        <Text style={styles.Btext}>Tap a Button</Text>
        <Text style={styles.smallText}>
          Get your groceries delivered or ready for pickup-and spend time on
          what matters
        </Text>
      </View>
      <View style={styles.authBox}>
        <View style={styles.authInner}>
          <TouchableOpacity style={styles.login}>
            <Text style={{color: '#000000', fontWeight: '900'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signup}>
            <Text style={{color: '#ffffff', fontWeight: '900'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{color: '#000000'}}>Not looking for groceries?</Text>
          <Text style={{color: '#007E23'}}>Become a shopper</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  bImage: {
    width: '100%',
  },
  mImg: {},
  sText: {
    paddingHorizontal: 35,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // zIndex:5,
    padding: 20,
  },
  Btext: {
    color: '#000000',

    fontWeight: 'bold',
    fontSize: 30,
    padding: 10,
  },
  smallText: {
    textAlign: 'center',
    color: '#000000',
  },
  authBox: {
    // zIndex: 5,
    width: '100%',
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  authInner: {
    // backgroundColor: '#034efc',
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  login: {
    flex: 1,
    justifyContent: 'center',
    // alignContent:'center',
    alignItems: 'center',
    // textAlign:'center',
    backgroundColor: '#ffdbfd',
    color: '#00000',
    width: '50%',
    height: 45,
    margin: 5,
    borderRadius: 5,
  },
  signup: {
    flex: 1,
    justifyContent: 'center',
    // alignContent:'center',
    alignItems: 'center',
    // textAlign:'center',
    backgroundColor: '#007E23',
    color: '#00000',
    width: '50%',
    height: 45,
    margin: 5,
    borderRadius: 5,
  },
});

export default FirstPage;
