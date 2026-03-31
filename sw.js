// public/sw.js
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB78RTVCg0cmSPp7A1RJyyAgBuCeolO0cc",
  projectId: "sk12-58e9e",
  messagingSenderId: "470207874652",
  appId: "1:470207874652:web:67ba1cf3629b7e5b144899"
});

const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage((payload) => {
  console.log('Background message received: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png', // Path to your Savig icon
    badge: '/badge.png', // Small icon for status bar
    image: payload.notification.image || '/news-default.jpg' // Big image like Zomato
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
