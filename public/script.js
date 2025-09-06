document.getElementById("post").addEventListener("click", () => {
  fetch("https://practiceapi-i1oq.onrender.com/name", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 3,
      name: "Ratul",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log("Saved Online:", data));
});
