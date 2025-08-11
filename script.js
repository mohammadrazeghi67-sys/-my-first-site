document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("hello-btn");
  const msg = document.getElementById("msg");

  btn.addEventListener("click", () => {
    const now = new Date().toLocaleTimeString();
    msg.textContent = "سلام! الان ساعت " + now;
  });
});

