fetch('http://localhost:3000/api/products', {
  method: "GET"
}).then(
  res => res.json()
).then(
  data => console.log(data)
)
