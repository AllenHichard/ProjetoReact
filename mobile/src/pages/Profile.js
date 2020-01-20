import React from "react";
import {View} from "react-native";
import {WebView} from 'react-native-webview';

function Profile({navigation}){
    const githubUsername = navigation.getParam('github_username')
    //const githubUsername = "diego3g"
    return <WebView style={{flex: 1}} source={{uri: `https://github.com/${githubUsername}`}}/>
}

export default Profile;