import React from 'react';
import WebView from "react-native-webview";

export default function FormSubmissionPage({ route, navigation }) {


    return (
        <WebView
            source={{
                uri: 'https://docs.google.com/forms/d/e/1FAIpQLSe3wY1t8N2vzL9yV4-RNh9v8XVxxOvoE_1PGuF0VmK6Yjwt6Q/viewform'
            }}
            style={{ marginTop: 20 }}
        />
    );
}
