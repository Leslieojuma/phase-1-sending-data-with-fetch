// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ name, email })
  })
    .then(response => {
      if (!response.ok) {
        // If the server responds with an error (non-200), forward it to catch()
        return response.json().then(err => Promise.reject(err));
      }
      return response.json();
    })
    .then(data => {
      // 2) Grab the new id from the server response and append it to the DOM
      const p = document.createElement("p");
      p.textContent = data.id;
      document.body.appendChild(p);
    })
    .catch(error => {
      // 3) Handle failures—append the error message to the DOM
      const p = document.createElement("p");
      p.textContent = error.message;
      document.body.appendChild(p);
    });
}
