import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'
import './styles/global.css'
import RegisterPage from './pages/register.jsx'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserPage from './pages/user.jsx'
import HomePage from './pages/home.jsx'
import { ConfigProvider, App as AntdApp } from 'antd'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        index: true, 
        element: <HomePage /> 
      },
      { 
        path: "user", 
        element: <UserPage /> 
      }
    ]
  },
  { 
    path: "register",
    element: <RegisterPage /> 
  },
  { 
    path: "login",
    element: <LoginPage /> 
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider>
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  </React.StrictMode>
)
