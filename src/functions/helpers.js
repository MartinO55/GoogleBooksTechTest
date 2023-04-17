export const fetchBooks = async (query) => {
  if (query) {
    try {
      let acceptableHeader = "application/json";
      let fetchURL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCZ15z_YoUnk6OVD-OVBNIMgAIC2XQzz-o`;
      const response = await fetch(fetchURL, {
        headers: { Accept: acceptableHeader },
      });

      const data = await response.json();

      return data.items;
    } catch (error) {
      console.log(error, " in fetch");
      throw new Error("Unable to search for books");
    }
  }
};
