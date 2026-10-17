const URL = './data.json';

export async function fetchNews() {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`Status HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}
