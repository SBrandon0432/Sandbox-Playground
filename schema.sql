drop database if exists ListOfMovies
create database ListOfMovies
\c ListOfMovies

create table movies (
  movie_name varchar(55),
  movie_id SERIAL
  primary key(movie_id)

)