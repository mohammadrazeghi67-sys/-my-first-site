document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("hello-btn");
  const msg = document.getElementById("msg");

  const API = "https://my-first-api-ehsr.onrender.com"; // آدرس خودت

  btn.addEventListener("click", async () => {
    msg.textContent = "در حال گرفتن زمان از سرور...";
    try {
      const res = await fetch(`${API}/time`);
      if (!res.ok) throw new Error("Status " + res.status);
      const data = await res.json();
      msg.textContent = "زمان از سرور: " + new Date(data.time).toLocaleTimeString();
    } catch (e) {
      msg.textContent = "خطا در اتصال: " + e.message;
    }
  });
});
