//from doc https://authjs.dev/getting-started/session-management/protecting

import { auth } from "@/auth"
import {SignOut} from "@/components/auth/sign-inOut-button"
import UserAvatar from "@/components/userAvatar"

import { getMovieFact } from "../api/openAI/openAI"

import MovieSection from "@/components/MovieSection"
import { redirect } from "next/navigation"

export default async function Page() {
  const session = await auth()
  if (!session) return redirect("/") 

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
      <MovieSection favMovie={favMovie} fact={fact} />
      <div className="flex justify-center mt-6 text-gray-500">
        <p>Created using NextJS</p>
      </div>
        
    </div>
  )
}