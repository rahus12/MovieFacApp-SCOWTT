//home page
import { SignIn } from "@/components/auth/sign-inOut-button";


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome to Movie Facts App
        </h1>
        <p className="text-gray-600 mb-6">
          Please log in and select your favorite movie 🎬
        </p>
        <SignIn />
      </div>
    </div>
  );
}
