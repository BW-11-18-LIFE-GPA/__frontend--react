import React, {useState} from "react";
import UserCardList from './components/UserCardList';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import NavTab from './components/NavTab';
import WelcomePage from './components/Welcome';


export default function App(props) {
  const [refresh, setRefresh] = useState(false);
  const [getUrl, setGetUrl] = useState(``);

  const handleSearchButton = e => {
    props.history.push("/s");
    setGetUrl("https://life-gpa-lambda.herokuapp.com/api/users" + e.target.username);
    setRefresh(!refresh);
  }
  return (
    <BrowserRouter>
      <NavTab />
      <Route exact path='/' component={WelcomePage}/>
      <Route exact path='/users' component={UserCardList}/>
      <Route path="/s" render={props => <UserCardList {...props} refresh={refresh} getUrl={getUrl} />} />
    </BrowserRouter>
  );
};
