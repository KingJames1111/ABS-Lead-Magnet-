import { TECHNICAL_STANDARDS } from '../core/technical-standards';

export async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('ServiceWorker registration successful');
      return registration;
    } catch (error) {
      console.error('ServiceWorker registration failed:', error);
      return null;
    }
  }
  return null;
}

export function setupOfflineSupport() {
  const { offline } = TECHNICAL_STANDARDS.pwa;
  
  // Cache required content
  caches.open('offline-v1').then(cache => {
    // Cache core functionality
    cache.addAll(offline.required);
    
    // Optionally cache recent data
    if (offline.optional.includes('recent data')) {
      cache.addAll(['/api/recent-data']);
    }
  });
}

export function setupPushNotifications() {
  return new Promise((resolve, reject) => {
    if (!('Notification' in window)) {
      reject('Push notifications not supported');
      return;
    }

    Notification.requestPermission()
      .then(permission => {
        if (permission === 'granted') {
          resolve('Push notifications enabled');
        } else {
          reject('Push notifications denied');
        }
      });
  });
}