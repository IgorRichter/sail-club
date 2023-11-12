// Изменения темы 
let darkThemeButton = document.querySelector('.theme-button-dark')
let lightThemeButton = document.querySelector('.theme-button-light')
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');


lightThemeButton.onclick = function () {
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');

    document.body.classList.remove('dark');
  };

darkThemeButton.onclick = function () {
    darkThemeButton.classList.add('active');
    lightThemeButton.classList.remove('active');

    document.body.classList.add('dark');
}

serifFontButton.onclick = function () {
    sansSerifFontButton.classList.remove('active');
    serifFontButton.classList.add('active');

    document.body.classList.add('serif');
    }

sansSerifFontButton.onclick = function () {
  sansSerifFontButton.classList.add('active');
  serifFontButton.classList.remove('active');

  document.body.classList.remove('serif');
};
//Переключения режима отображения
let blogArticles = document.querySelectorAll('.blog-article');

for (let blogArticle of blogArticles) {
  let moreButton = blogArticle.querySelector('.more');
  moreButton.onclick = function () {
    blogArticle.classList.remove('short')
  }
};

//Смена раскладки карточек
let buttonGrid = document.querySelector('.card-view-button-grid');
let buttonList = document.querySelector('.card-view-button-list');

let cardsList = document.querySelector('.cards');

buttonGrid.onclick = function () {
  cardsList.classList.remove('list');
  buttonGrid.classList.add('active');
  buttonList.classList.remove('active');

}

buttonList.onclick = function () {
  cardsList.classList.add('list');
  buttonGrid.classList.remove('active');
  buttonList.classList.add('active');

}
//Переключения галереи
let activePhoto = document.querySelector(".active-photo");
let previews = document.querySelectorAll(".preview-list a");

for (let preview of previews) {
  preview.onclick = function (evt) {
    evt.preventDefault();

    let currentActive = document.querySelector(".preview-list .active-item");
    currentActive.classList.remove("active-item");
    preview.classList.add("active-item");

    activePhoto.src = preview.href;
  };
}

