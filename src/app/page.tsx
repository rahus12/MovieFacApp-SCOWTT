//home page
import { SignIn } from "@/components/auth/sign-inOut-button";


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="w-full max-w-2xl rounded-2xl bg-gray-700 p-8 shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-150 mb-2">
          Welcome to Movie Facts App
        </h1>
        <p className="text-gray-250 mb-6 text-l">
          Please log in and select your favorite movie 🎬
        </p>
        <SignIn />
      </div>
    </div>
  );
}
