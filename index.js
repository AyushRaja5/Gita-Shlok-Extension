const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9bd7d264aamsh6b1eea3801aa40dp139a50jsn3241d1b6b4a5',
    'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
  }
};

const getChapters = async () => {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      displayChapters(data); // Call a function to display the chapters
    } else {
      console.error('Failed to fetch data');
    }
  } catch (error) {
    console.error(error);
  }
};

// Function to display the chapters
function displayChapters(chaptersData) {
  const chaptersContainer = document.querySelector('#chaptersContainer');
  const randomIndex = Math.floor(Math.random() * chaptersData.length);
  const randomChapter = chaptersData[randomIndex];

  const chapterElement = document.createElement('div');
  chapterElement.innerHTML = `<h2> ${randomChapter.name}</h2>
    <p><span id="heading">Meaning:</span> ${randomChapter.name_meaning}</p>
    <p><span id="heading">Summary:</span> ${randomChapter.chapter_summary_hindi}</p>
  `;
  chaptersContainer.appendChild(chapterElement);
}

window.addEventListener('load', () => {
  getChapters();
});
