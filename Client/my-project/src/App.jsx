// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import { UserPage } from '../pages/UserPage';
import { PostPage } from '../pages/PostPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:userpage" element={<UserPage />} /> {/* Define a route for UserPage */}
        {/* <Route path='/:userpage/postpage/:postId' element={<PostPage></PostPage>} ></Route> */}
        <Route path='/postpage' element={<PostPage></PostPage>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
