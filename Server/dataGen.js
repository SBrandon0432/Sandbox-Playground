const faker = require('faker');

const director = faker.name.findName();
const movieName = faker.name.jobTitle();
const date = faker.date.past();
const views = faker.datatype.number();
const rating = Math.floor(Math.random() * 100) / 10;
const picture = faker.image.sports();
const about = faker.lorem.paragraph();

const dataGen = ()  => {
  const result = [];

  for (let i =0; i < 100; i+=1) {
    let movie = {
      director: director,
      movie: movieName,
      date: date,
      views: views,
      rating: rating,
      poster: picture,
      about: about
    }
    result.push(movie);
  }
  return result;
}

// movie name,
// actors
// date
// views
// picture
// rating
// synapse?

// send to a postgresQL DBMS
//


//==================
//tonights goals
//  1. make the array to push into the dms
//   2. set up the DBMS
//   3. make the api's routing
//  4. have fun!!
//===================