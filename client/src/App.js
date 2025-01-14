import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import Header from './components/Header'
import Nav from './components/Nav';
import Footer from './components/Footer'
import MainPage from './pages/index';
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import Resources from './components/Resources'
import SingleStory from './pages/SingleStory'
import Profile from './pages/Profile'
import Home from "./pages/Home";
import StoriesList from './components/StoryList'
import AllStories from './pages/AllStories'
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'


//styling
import './index.css'

//Import Apollo:
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// GraphQL endpoint:
const httpLink = createHttpLink({
  //production:
  // uri: 'https://share-your-story-texas.herokuapp.com/graphql'
  //development:
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {


  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <Nav />
        <div className="container-fluid">

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resources" element={<Resources />} />
            <Route path='/story/:id' element={<SingleStory />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/stories' element={<StoriesList />} />
            <Route path='/allstories' element={<AllStories />} />
            <Route path="/comment/:id" element={<CommentForm />} />
            <Route path='/comments' element={<CommentList />} />


          </Routes>

        </div>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
