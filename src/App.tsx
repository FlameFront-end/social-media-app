import './globals.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from 'lucide-react'
import SignInForm from './_auth/forms/SignInForm.tsx'
import SignUpForm from './_auth/forms/SignUpForm.tsx'
import AuthLayout from './_auth/AuthLayout.tsx'
import RootLayout from './_root/RootLayout.tsx'

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
