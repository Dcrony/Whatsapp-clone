// Message sending logic
document.querySelector(".send-btn").addEventListener("click", sendMessage);
document.querySelector(".chat-footer input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const input = document.querySelector(".chat-footer input");
  const messageText = input.value.trim();
  if (!messageText) return;

  const chatBody = document.querySelector(".chat-body");
  const message = document.createElement("div");
  message.classList.add("message", "sent");
  message.textContent = messageText;

  chatBody.appendChild(message);
  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Tab switching logic
const tabs = document.querySelectorAll(".tab");
const sidebar = document.querySelector(".sidebar");

const tabContent = {
  chats: `
      <header class="sidebar-header">
        <input type="search" placeholder="Search or start new chat" />
      </header>
      <div class="chat-list">
        <div class="chat-item active">
          <img src="https://via.placeholder.com/50" alt="User" class="avatar" />
          <div class="chat-info">
            <h3>John Doe</h3>
            <p>Hey there! How are you?</p>
          </div>
        </div>
        <div class="chat-item">
          <img src="https://via.placeholder.com/50" alt="User" class="avatar" />
          <div class="chat-info">
            <h3>Jane Smith</h3>
            <p>See you tomorrow!</p>
          </div>
        </div>
      </div>
  `,
  status: `
      <header class="sidebar-header">
        <h3>Status</h3>
      </header>
      <div class="status-list">
        <div class="status-item">
          <img src="https://via.placeholder.com/50" alt="User" class="avatar" />
          <div class="status-info">
            <h3>My Status</h3>
            <p>Tap to add status update</p>
          </div>
        </div>
        <hr>
        <p style="padding: 10px; color: #aaa;">Recent updates</p>
        <div class="status-item">
          <img src="https://via.placeholder.com/50" alt="User" class="avatar" />
          <div class="status-info">
            <h3>Jane Smith</h3>
            <p>5 minutes ago</p>
          </div>
        </div>
      </div>
  `,
  communities: `
      <header class="sidebar-header">
        <h3>Communities</h3>
      </header>
      <div class="community-list">
        <div class="community-item">
          <img src="https://via.placeholder.com/50" alt="Group" class="avatar" />
          <div class="community-info">
            <h3>Developers Hub</h3>
            <p>10 new messages</p>
          </div>
        </div>
        <div class="community-item">
          <img src="https://via.placeholder.com/50" alt="Group" class="avatar" />
          <div class="community-info">
            <h3>Friends Forever</h3>
            <p>2 new messages</p>
          </div>
        </div>
      </div>
  `,
  calls: `
      <header class="sidebar-header">
        <h3>Calls</h3>
      </header>
      <div class="call-list">
        <div class="call-item">
          <img src="https://via.placeholder.com/50" alt="User" class="avatar" />
          <div class="call-info">
            <h3>John Doe</h3>
            <p>Yesterday, 10:45 PM</p>
          </div>
          <span>📞</span>
        </div>
        <div class="call-item">
          <img src="https://via.placeholder.com/50" alt="User" class="avatar" />
          <div class="call-info">
            <h3>Jane Smith</h3>
            <p>Today, 8:20 AM</p>
          </div>
          <span>📹</span>
        </div>
      </div>
  `
};

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    switch (index) {
      case 0:
        sidebar.innerHTML = tabContent.chats;
        break;
      case 1:
        sidebar.innerHTML = tabContent.status;
        break;
      case 2:
        sidebar.innerHTML = tabContent.communities;
        break;
      case 3:
        sidebar.innerHTML = tabContent.calls;
        break;
    }
  });
});


// ===== MOBILE RESPONSIVE LOGIC =====

// Show chat window when chat item clicked (on mobile)
document.addEventListener("click", (e) => {
  if (e.target.closest(".chat-item")) {
    const chatWindow = document.querySelector(".chat-window");
    const sidebar = document.querySelector(".sidebar");

    if (window.innerWidth <= 768) {
      sidebar.style.display = "none";
      chatWindow.classList.add("active");
    }
  }

  // Back button clicked
  if (e.target.classList.contains("back-btn")) {
    const chatWindow = document.querySelector(".chat-window");
    const sidebar = document.querySelector(".sidebar");

    chatWindow.classList.remove("active");
    sidebar.style.display = "block";
  }
});

// Add back button dynamically
const chatHeader = document.querySelector(".chat-header .chat-user");
const backBtn = document.createElement("span");
backBtn.textContent = "←";
backBtn.classList.add("back-btn");
chatHeader.prepend(backBtn);
