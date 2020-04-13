import React from 'react';
import Container from '@material-ui/core/Container';
import PostList from './components/postList/postList';
import Header from './components/header/header';



function App() {


  return (

      <Container>
		  <Header />
          <PostList />
      </Container>




  );
}

export default App;
