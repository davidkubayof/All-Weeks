const url = "http://localhost:3000";

export async function createComplaintsApi(complaint) {
  const response = await fetch(url + "/api/complaints", {
    method: "POST",
    body: JSON.stringify(complaint),
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();
  console.log(result);
  return result;
}
export async function loginApi(password) {
  const response = await fetch(url + "/api/admin/login", {
    method: "POST",
    body: JSON.stringify({password}),
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();
  return result;
}
export async function returnComplaintsApi(token) {
  const response = await fetch(url + "/api/complaints", {
    method: "GET",
    headers: { token },
  });
  const result = await response.json();  
  return result;
}
