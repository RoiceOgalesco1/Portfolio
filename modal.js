const projects = [
  {
    title: "Styling Fit App",
    images: ["stylingLogin.png", "stylingCreate.png", "stylingGallery.png", "stylingUpload.png"]
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

let currentImageIndex = 0;

function renderModalImage(project) {
  const modalImages = document.getElementById('modal-images');
  if (project.title === "Styling Fit App") {
    modalImages.innerHTML = `<img src="${project.images[currentImageIndex]}" style="width:100%;height:60vh;object-fit:contain;" class="rounded border-2 border-[#F6E27A] bg-[#181a20]" />`;
  } else {
    modalImages.innerHTML = `<img src="${project.images[currentImageIndex]}" class="w-72 h-96 object-cover rounded border-2 border-[#F6E27A] bg-[#181a20]" />`;
  }
  // Render navigation buttons
  const navButtons = document.getElementById('modal-nav-buttons');
  if (project.images.length > 1) {
    navButtons.innerHTML = `
      <button id="modal-prev" class="px-6 py-2 bg-[#23272f] text-[#F6E27A] border border-[#F6E27A] rounded hover:bg-[#F6E27A] hover:text-[#23272f] transition">Previous</button>
      <button id="modal-next" class="px-6 py-2 bg-[#23272f] text-[#F6E27A] border border-[#F6E27A] rounded hover:bg-[#F6E27A] hover:text-[#23272f] transition">Next</button>
    `;
    document.getElementById('modal-prev').onclick = function(e) {
      e.stopPropagation();
      currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
      renderModalImage(project);
    };
    document.getElementById('modal-next').onclick = function(e) {
      e.stopPropagation();
      currentImageIndex = (currentImageIndex + 1) % project.images.length;
      renderModalImage(project);
    };
  } else {
    navButtons.innerHTML = '';
  }
}

// Modal logic
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.view-project-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const idx = parseInt(this.getAttribute('data-project'));
      const project = projects[idx];
      document.getElementById('modal-title').textContent = project.title;
      currentImageIndex = 0;
      renderModalImage(project);
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