/* 
Mini-Exercise
*/

/* 1.Write a function using Promise that resolves after 3 seconds with the message: "Promise resolved!"*/

const resolved = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 2000);
  });
};

resolved().then((mssg) => console.log(mssg));

/* 2.Create a function with async/await to fetch data from an API and handle potential errors.*/

const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

// Example API call
const myApi = "https://dog.ceo/api/breeds/image/random";
fetchData(myApi);

/* 3.Use Promise.all to fetch multiple pieces of data in parallel.*/

const promise1 = Promise.resolve("First");
const promise2 = Promise.resolve("Second");
const promise3 = Promise.resolve("Third");

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // Output: ["First", "Second", "Third"]
  })
  .catch((error) => {
    console.error("Error:", error);
  });
