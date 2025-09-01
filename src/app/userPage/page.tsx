//from doc https://authjs.dev/getting-started/session-management/protecting

import { auth } from "@/auth"
import {SignOut} from "@/components/auth/sign-inOut-button"
import UserAvatar from "@/components/userAvatar"

import { setMovie } from "../api/actions/actions"
import { getMovieFact } from "../api/openAI/openAI"
import { redirect } from "next/navigation"
import Link from "next/link"

import UpdateMovie from "../updateMovie/page"

export default async function Page() {
  const session = await auth()
  if (!session) return <div>Not authenticated</div> 
  console.log(JSON.stringify(session))
  const favMovie = session.user.fav_movie
  let fact 
  if (favMovie != "" && favMovie != null) {
    fact = getMovieFact()
  }
  // else{
  //   redirect("/updateMovie")
  // }

  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">
      
      {/* Profile Box */}
      <div className="flex items-center gap-4 w-full max-w-2xl bg-gray-700 p-6 rounded-2xl shadow-md mb-6">
        <UserAvatar />
        <div className="ml-auto">
          <SignOut />
        </div>
      </div>

      {/* to enter a movie */}
      {favMovie == "" ? (
        <UpdateMovie/>
        
        ):(
        <>
        <div className="w-full max-w-2xl bg-gray-700 p-6 rounded-2xl shadow-md text-center">
            {/* Movie Facts Box */}
            <h2 className="text-xl font-semibold text-gray-150 mb-2">Movie Fact 🎬</h2>
            <p className="text-gray-200">
            {fact}
            </p>
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/updateMovie">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-colors duration-200">
              Update Movie
            </button>
          </Link>
        </div>
        </>
        )}
      <div className="flex justify-center mt-6 text-gray-500">
        <p>Created using NextJS</p>
      </div>
        
    </div>
  )
}