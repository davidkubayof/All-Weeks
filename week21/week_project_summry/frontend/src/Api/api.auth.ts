const url = 'http://localhost:3000/auth'

export async function getToken(agentCode: string, password: string) {
  const response = await fetch(url + "/login", {
    method: "POST",
    body: JSON.stringify({ agentCode, password }),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    const error: any = new Error("Login failed")
    error.status = response.status
    throw error
  }
  return await response.json();
}

export async function getMe() {
  const token = localStorage.getItem("token");
  console.log(token);

  const response = await fetch(url + "/me", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw new Error('faild')
  return response.json();
}