const projects = [
  {
    title: "Styling Fit App",
    images: ["images/stylingfit1.jpg", "images/stylingfit2.jpg"]
  },
  {
    title: "Asset Management System",
    images: ["images/asset1.jpg", "images/asset2.jpg"]
  },
  {
    title: "HR Chatbot",
    images: ["images/hrchatbot1.jpg"]
  },
  {
    title: "Web Guessing Game",
    images: ["images/guessinggame1.jpg"]
  }
];

// Modal logic
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.view-project-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const idx = parseInt(this.getAttribute('data-project'));
      const project = projects[idx];
      document.getElementById('modal-title').textContent = project.title;
      document.getElementById('modal-images').innerHTML = project.images.map(src => `<img src="${src}" class="w-72 h-96 object-cover rounded border-2 border-[#F6E27A] bg-[#181a20]" />`).join('');
      document.getElementById('project-modal').classList.remove('hidden');
    });
  });
  document.getElementById('close-modal').onclick = () => {
    document.getElementById('project-modal').classList.add('hidden');
  };
  // Optional: Close modal when clicking outside the modal box
  document.getElementById('project-modal').addEventListener('click', function(e) {
    if (e.target === this) this.classList.add('hidden');
  });
}); 