
const button = document.getElementById('toggleButton');
const content = document.getElementById('content');
button.addEventListener('click', () => {
  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    button.textContent = 'Hide Content';
  } else {
    content.style.display = 'none';
    button.textContent = 'Show Content';
  }
});
// Initial setup to hide content
content.style.display = 'none';