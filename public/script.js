document.getElementById("post").addEventListener("click", () => {
  fetch("https://api-le4v.onrender.com/levels", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 3,
      name: "Ratul"
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log("Saved Online:", data));
});
