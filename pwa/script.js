// 1. Daftarkan service‑worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('service-worker.js')
    .then(() => console.log('Service Worker terdaftar'))
    .catch(err => console.error('SW gagal:', err));
}

document.getElementById('notifBtn').addEventListener('click', async () => {
  if (!('Notification' in window)) return alert('Browser tidak mendukung Notification API');
  
  const perm = await Notification.requestPermission();
  if (perm === 'granted') {
    new Notification('Notifikasi PWA ', { body: 'PWA aktif.' });
  }
});
