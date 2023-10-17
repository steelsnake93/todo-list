export default function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'fixed bottom-5 right-5 bg-gray-800 text-white p-2.5 px-5 rounded-md shadow-md z-50 transition-transform ease-in-out duration-300 transform translate-y-full opacity-0';
  notification.innerHTML = `
  ${message}
  <button class="absolute top-1 right-1 text-lg focus:outline-none">&times;</button>
  `;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateY(0)';
}, 10);

  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(1/2)';
    setTimeout(() => {
        notification.remove();
    }, 300);
  }, 3000);

  notification.querySelector('button').addEventListener('click', () => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(1/2)';
    setTimeout(() => {
        notification.remove('show');
    }, 300);
  });
}
