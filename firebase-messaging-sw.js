// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
apiKey: "AIzaSyB78RTVCg0cmSPp7A1RJyyAgBuCeolO0cc",
        authDomain: "sk12-58e9e.firebaseapp.com",
        projectId: "sk12-58e9e",
        storageBucket: "sk12-58e9e.appspot.com",
        messagingSenderId: "470207874652",
        appId: "1:470207874652:web:67ba1cf3629b7e5b144899"
});

const messaging = firebase.messaging();

// This handler is triggered when a notification is received while the app is in the background
messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || '/icon.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});