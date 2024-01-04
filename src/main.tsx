import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext.tsx'
import GlobalStyle from './styles/GlobalStyle.ts'
import MainLayout from './components/layouts/MainLayout.tsx'
import Landing from './pages/Landing.tsx'
import SignIn from './pages/SignIn.tsx'
import SignUp from './pages/SignUp.tsx'
import Admin from './pages/Admin.tsx'
import AnonymousRoute from './components/Route/AnonymousRoute.tsx'
import ProtectedRoute from './components/Route/ProtectedRoute.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={
              <AnonymousRoute>
                <SignIn />
              </AnonymousRoute>
            } />
            <Route path="/signup" element={
              <AnonymousRoute>
                <SignUp />
              </AnonymousRoute>
            } />
            <Route path="/admin" element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
