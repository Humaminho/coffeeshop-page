export default function home() {
  const content = document.getElementById("content");
  content.innerHTML = ``
    
    content.classList.remove('about');
    content.classList.remove('menu');
    content.classList.add('home');
}