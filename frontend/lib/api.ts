const API_URL = "https://groweasy-smart-import.onrender.com";

export async function uploadCSV(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_URL}/api/import/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  return response.json();
}