import React from 'react';
import { Component } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Colors from './colors';


const styles = StyleSheet.create({

  // APP

  app_container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //   COMMON


  view: {
    backgroundColor: Colors.white,
    flex: 1
  },
  design_views: {
    alignItems: 'flex-end',
    marginTop: "-15%",
    marginRight: "-15%"
  },
  CircleShapeView2: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: Colors.light_orange,
  },
  CircleShapeView: {
    width: 130,
    height: 130,
    borderRadius: 150 / 2,
    backgroundColor: Colors.dark_orange,
    marginTop: -140,
    marginRight: 10
  },
  epex_text: {
    color: Colors.dark_orange,
    fontSize: 30,
    marginTop: -20,
    fontWeight: 'bold',
    flexDirection: 'column',
    alignItems: 'center'
  },
  ViewRightAlign: {
    marginLeft: 250,
    marginTop: 0
  },
  ViewLeftAlign: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: -20,
    marginLeft: -30

    // alignItems: 'flex-start'
  },



  // LOGIN SCREEN


  login_text_signin: {
    color: Colors.dark_orange,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  login_text_signin_view: {
    alignItems: 'center'
  },
  login_text_place: {
    login_text_place: {
      color: Colors.black,
      backgroundColor: Colors.light_pink,
      borderRadius: 10,
     alignItems:"center",
     alignSelf:"center",
     width:"95%",
      marginTop: 10,
      height: 60,
      textDecorationColor: Colors.black,
      underlineColorAndroid: "transparent"
    },
  },
  login_text_remember: {
    marginTop: 20,
    marginLeft: 20,
    color: Colors.grey
  },
  login_text_forgotpassword: {
    marginTop: 20,
    marginLeft: 20,
    color: Colors.dark_orange
  },
  signin_button: {
    color: Colors.dark_orange,
    backgroundColor: Colors.dark_orange,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    height: 50,
    width: "95%",
    alignItems: "center",
    alignSelf:"center",
    marginBottom: 40
  },
  wbsignin_button: {
    color: Colors.white,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.dark_orange,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 100,
    height: 50,
    width:"90%",
    alignItems: "center",
    alignSelf:"center"
  },
  wbsignin_button2: {
    color: Colors.white,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.dark_orange,
    borderRadius: 10,
    marginTop: 20,
    height: 50,
    width:"100%",
    alignItems: "center",
    alignSelf:"center"
  },

  login_View_horizontal: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf:"center",
    alignContent:"center"
  },
  otp_View_horizontal: {
    flexDirection: 'row',
    marginRight: 20
  },
  wb_login_View_horizontal: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf:"center",
    alignContent:"center"
  },
  login_line: {
    flex: 1,
    width: "30%",
    height: 2,
    backgroundColor: Colors.dark_orange,
    margin: 20
  },
  wblogin_line: {
    flex: 1,
    width: "100%",
    height: 2,
    backgroundColor: Colors.dark_orange,
    margin: 20
  },
  login_text_signinwith: {
    marginTop: 10,
    margin:5,
    color: Colors.grey
  },
  wblogin_text_signinwith2: {
    marginLeft: 5,
    marginRight: 5,
    color: Colors.grey
  },
  wblogin_text_signinwith1: {
    marginTop: 10,
    margin:5,
    color: Colors.grey
  },

  login_text_signinwith2: {
    marginTop: 10,
    color: Colors.dark_orange
  },

  epex_text_view: {
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: -40
  },
  text_enterotp: {
    color: Colors.black,
    backgroundColor: Colors.light_pink,
    borderRadius: 10,
    width:"20%",
    marginTop: 10,
    marginLeft: 20,
    height: 60,
    textDecorationColor: Colors.black,
    underlineColorAndroid: "transparent"
  },

  // SIGNUP SCREEN

  signup_text_signup: {
    color: Colors.dark_orange,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  signup_text_signin_view: {
    alignItems: 'center',
    marginTop: 20
  },

  signin_button_text: {
    flex:1,
    fontSize: 20,
    color: Colors.white,
    marginTop: 15,
    alignSelf:"center",
    alignItems:"center"
  },
  wb_signin_button_text: {
    flex:1,
    fontSize: 20,
    color: Colors.dark_orange,
    marginTop: 10,
    alignSelf:"center",
    alignItems:"center"
  },
  wbcreate_account_text: {
    flex:1,
    fontSize: 20,
    color: Colors.dark_orange,
    marginTop: 10,
    width: "100%",
    alignSelf:"center",
    alignItems:"center"
  },
  wbcontinue_text: {
    flex:1,
    fontSize: 20,
    color: Colors.dark_orange,
    marginTop: 10,
    alignSelf:"center",
    alignItems:"center"
  },

  // SPLASH SCREEN

  splash_mainview: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center'
  },
  splash_view_rightalign: {
    alignItems: 'flex-end',
    marginTop: -40,
    marginRight: -50
  },
  splash_CircleShapeView4: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: Colors.light_orange
  },
  splash_CircleShapeView3: {
    width: 130,
    height: 130,
    borderRadius: 150 / 2,
    marginTop: -140,
    marginLeft: 10,
    backgroundColor: Colors.dark_orange,
  },
  splash_CircleShapeView2: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: Colors.light_orange
  },
  splash_CircleShapeView1: {
    width: 130,
    height: 130,
    borderRadius: 150 / 2,
    marginTop: -140,
    marginRight: 10,
    backgroundColor: Colors.dark_orange,
  },
  epex_text_align: {
    alignItems: 'center',
    flex: 1
  },
  epex_text_design: {
    color: Colors.dark_orange,
    fontSize: 20,
    fontWeight: 'bold'
  },

  // CREATE ACCOUNT

  continue_button: {
      color: Colors.dark_orange,
      backgroundColor: Colors.dark_orange,
      borderRadius: 10,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 40,
      height: 50,
      width:"95%",
      alignItems: "center",
      alignSelf:"center",
      marginBottom: 120
    },
    continue_button_create_password: {
      color: Colors.dark_orange,
      backgroundColor: Colors.dark_orange,
      borderRadius: 10,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 380,
      height: 50,
      width:"90%",
      alignItems: "center",
      alignSelf:"center"
    },
    continue_button_upload: {
      color: Colors.dark_orange,
      backgroundColor: Colors.dark_orange,
      borderRadius: 10,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 500,
      height: 50,
      width:"90%",
      alignItems: "center",
      alignSelf:"center",
      position: 'absolute'
    },
    letsstart_view: {
      color: Colors.dark_orange,
      backgroundColor: Colors.dark_orange,
      borderRadius: 10,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 20,
      height: 50,
      width:"90%",
      alignItems: "center",
      alignSelf:"center"
    },
    letsstart_button: {
      color: Colors.dark_orange,
      backgroundColor: Colors.dark_orange,
      borderRadius: 10,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 20,
      height: 50,
      width:"90%",
      alignItems: "flex-end",
      alignSelf:"center",
      marginTop: 80
    },
  continue_button_text: {
    fontSize: 20,
    color: Colors.white,
    alignSelf:"center",
    alignItems:"center",
    position: 'absolute'
  },
  confirm_button_text: {
    fontSize: 20,
    color: Colors.white,
    alignSelf:"center",
    alignItems:"center",
    position: 'absolute',
    marginTop: 10
  },
  sentotp_button_text: {
    fontSize: 20,
    color: Colors.white,
    alignSelf:"center",
    alignItems:"center",
    position: 'absolute',
    marginTop: 10
  },
  letsstart_button_text: {
    flex:1,
    fontSize: 20,
    color: Colors.white,
    marginTop: 15,
    alignSelf:"center",
    alignItems:"center"
  },

  // UPLOAD DOCUMENTS

  upload_View_horizontal: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  }


});

export default styles;