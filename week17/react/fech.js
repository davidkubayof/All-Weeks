async function getNews() {
  const url = "https://newsapi.org/v2/everything";
  try {
    const response = await fetch(
      url + `?q=tesla&apiKey=739800468ebb488584e6490e6e3dbda0`,
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

export default getNews;