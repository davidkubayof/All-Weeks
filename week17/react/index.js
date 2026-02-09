import getNews from "./fech.js";

const main = document.getElementById("main");

const create_S = document.createElement("section");
create_S.classList.add("create_S");
const news = await getNews();

async function createAllCards() {
  for (let i = 0; i < news.articles.length; i++) {
    const section = document.createElement("section");
    section.classList.add("section_card");
    section.id = i
    const news_title = document.createElement("h5");
    news_title.textContent = news.articles[i].title;

    const news_author= document.createElement("h5");
    news_author.textContent = news.articles[i].author;


    const news_img = document.createElement("img");
    news_img.src = news.articles[i].urlToImage;
    news_img.classList.add("img_1");
    
    section.append(news_author);
    section.append(news_img);
    section.append(news_title);
    create_S.append(section);
    main.append(create_S);
  }
}
createAllCards();

function createNav() {
  const root = document.getElementById("root");
  const nav = document.createElement("nav");
  const title = document.createElement("h1");
  title.textContent = "News";
  title.classList.add("title");
  root.appendChild(title);

  const p_1 = document.createElement("p");
  p_1.textContent = "Top Stories";
  p_1.classList.add("p_1");
  root.appendChild(p_1);

  const home = document.createElement("a");
  home.href = "";
  home.textContent = "Home";
  home.classList.add("link");
  home.addEventListener("click", (e) => {
    e.preventDefault();
  });

  const Create_Story = document.createElement("a");
  Create_Story.textContent = "Create Story";
  Create_Story.classList.add("link");
  nav.appendChild(home);
  nav.appendChild(Create_Story);
  root.appendChild(nav);
}

createNav();


function save_articles() {
  if (localStorage.getItem("articles")) {
    return JSON.parse(localStorage.getItem("articles"));
  } else {
    localStorage.setItem("articles", JSON.stringify(news));
  }
}

save_articles();

// export const { totalResults, articles } = await getNews();
// export const { title, author, urlToImage, url } = articles[0]; //AFTER CHANGE TO LOOP

function clik(){
    document.getElementById('section_card').addEventListener('click',(event)=>{
        let cardID;
        if(event.target.classList.contains('section_card')){
            cardID = parseInt(event.target.id);
            
        }
    })
}