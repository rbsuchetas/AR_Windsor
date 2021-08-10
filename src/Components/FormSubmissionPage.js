import React from 'react';
import WebView from "react-native-webview";

export default function FormSubmissionPage({ route, navigation }) {


    return (
        <WebView
            source={{
                uri: 'https://docs.google.com/forms/d/e/1FAIpQLSfpcLEe4qlMSXTMiuQl_H-qTjQlQI4eLaJHnpqT3S_3eG7kcg/viewform'
            }}
            style={{ marginTop: 20 }}
        />
    );
}
