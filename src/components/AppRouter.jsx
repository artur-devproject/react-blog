import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context';
import About from '../pages/About';
import NoMatch from '../pages/NoMatch';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';
import Registry from '../pages/Registry';
import Loader from './UI/loader/Loader';

export default function AppRouter () {
    const { isAuth, isLoading } = useContext(AuthContext)

    if(isLoading) return <Loader />

    return (
        <Routes>
          <Route path="registry" element={<Registry />} />
          <Route path="about" element={<About />} />
          {isAuth
            ? <React.Fragment>
                <Route path="/" element={<Navigate to="/posts" />} />
                <Route path="posts" element={<Posts />} />
                <Route path="posts/:id" element={<PostIdPage />} />
              </React.Fragment>
            : <React.Fragment>
                <Route path="/" element={<Navigate to="/registry" />} />
                <Route path="posts" element={<Navigate to="/registry" />} />
              </React.Fragment>
          }
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}