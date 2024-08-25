'use client'
import { login } from '@/apis/AuthApi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import React,{useState} from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<any>('');
  
    const handleLogin = async (e:any) => {
      e.preventDefault();
      setError('');
  
      try {
        const data = await login(email, password);
        console.log('Login successful:', data);
      } catch (err) {
        console.log(err)
        setError(err);
      }
    };
  
    return (
      <div className="flex h-screen">
        {/* Left half with book image */}
        <div className="hidden md:flex w-1/2 h-full  items-center justify-center flex-col gap-y-3">
            <img alt='book' src={'https://i.pinimg.com/736x/ef/e9/af/efe9afd29c47b7c9007216c07d029379.jpg'} className='w-7/12 h-10/12' />
            <Label>some fancy quotes about our book store</Label>
        </div>
  
        {/* Right half with login form */}
        <div className="w-full lg:w-1/2 flex justify-center items-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div >
              <div className="mb-4">
                <Label htmlFor="email" className="block text-gray-700">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-6">
                <Label htmlFor="password" className="block text-gray-700">
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <Button onClick={handleLogin} className="w-full">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center">
              <a href="/forgot-password" className="text-slate-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LoginPage