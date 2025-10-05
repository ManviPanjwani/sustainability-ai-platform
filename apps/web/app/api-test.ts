export async function fetchHealth() {
  const res = await fetch("http://localhost:8000/health");
  return res.json();
}
