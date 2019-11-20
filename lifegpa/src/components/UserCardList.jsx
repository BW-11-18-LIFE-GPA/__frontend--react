import React, { useEffect, useState } from "react";
import axios from 'axios';
import UserCard from './UserCard'
import SearchForm from './SearchForm';


export default function UseCardList() {
  const [ users, setUsers ] = useState([]);

const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get(` https://life-gpa-lambda.herokuapp.com/api/users/`)
      .then(res => {
        setUsers(res.data.filter(username =>
          username.username.toLowerCase().includes(query.toLowerCase())
        ) );
        console.log("results", res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [query]);

  const handleChange = e => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  return (
    <section>
      <SearchForm handleChange={handleChange} searchTerm={query}/>
      {users.map((char) => {
        return (
          <UserCard key={char.username} 
          username={char.username}
          email = {char.email}
          habits = {char.habits} />
        )
      })}

    </section>
  );
}
