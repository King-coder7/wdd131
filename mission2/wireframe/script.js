const books = [
    {
      title: "Magyk",
      date: "2022-07-05",
      age: "10-14",
      genre: "fantasy",
      rating: 3,
      description: "An adventure into magical worlds with strong characters."
    },
    {
      title: "The Mysterious Benedict Society",
      date: "2023-02-14",
      age: "10-12",
      genre: "mystery",
      rating: 5,
      description: "A group of gifted kids solve puzzles to uncover a mystery."
    }
  ];
  
  function renderBooks(filter = {}) {
    const list = document.getElementById("bookList");
    list.innerHTML = "";
    const filtered = books.filter(book => {
      return (
        (filter.age === "all" || book.age === filter.age) &&
        (filter.genre === "all" || book.genre === filter.genre) &&
        (filter.rating === "all" || book.rating >= parseInt(filter.rating))
      );
    });
  
    filtered.forEach(book => {
      const card = document.createElement("div");
      card.className = "book-card";
      card.innerHTML = `
        <div class="book-meta">
          <p>${book.date}</p>
          <p>${book.age}</p>
          <p>${book.genre}</p>
          <p>${"★".repeat(book.rating)}</p>
        </div>
        <div class="book-info">
          <h3>${book.title}</h3>
          <div class="book-cover"></div>
          <p class="description">${book.description}</p>
        </div>
      `;
      list.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const genre = document.getElementById("genre");
    const age = document.getElementById("age");
    const rating = document.getElementById("rating");
  
    const applyFilters = () => {
      renderBooks({
        genre: genre.value,
        age: age.value,
        rating: rating.value
      });
    };
  
    genre.addEventListener("change", applyFilters);
    age.addEventListener("change", applyFilters);
    rating.addEventListener("change", applyFilters);
  
    renderBooks();
  });
  