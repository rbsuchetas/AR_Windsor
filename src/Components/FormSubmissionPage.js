import React from 'react';
import WebView from "react-native-webview";

export default function FormSubmissionPage({ route, navigation }) {


    return (
        <WebView
            source={{
                uri: 'https://formfacade.com/public/110484840907423248922/all/form/1FAIpQLSfpcLEe4qlMSXTMiuQl_H-qTjQlQI4eLaJHnpqT3S_3eG7kcg'
            }}
            style={{ marginTop: 20 }}
        />
    );
}
