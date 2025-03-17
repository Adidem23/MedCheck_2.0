import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom'
import { HeroUIProvider } from "@heroui/react";
import { MantineProvider } from '@mantine/core';
import App from './App.jsx'

// pk_test_c3dlZXQtZG9nZmlzaC0xOC5jbGVyay5hY2NvdW50cy5kZXYk
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={"pk_test_c3dlZXQtZG9nZmlzaC0xOC5jbGVyay5hY2NvdW50cy5kZXYk"}>
      <MantineProvider>
        <HeroUIProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HeroUIProvider>
      </MantineProvider>
    </ClerkProvider>
  </StrictMode>,
)
