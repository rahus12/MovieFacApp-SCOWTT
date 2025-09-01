//from doc https://authjs.dev/getting-started/session-management/protecting

import { auth } from "@/auth"
import {SignOut} from "@/components/auth/sign-inOut-button"
import UserAvatar from "@/components/userAvatar"

import { setMovie } from "../api/actions/actions"
import { getMovieFact } from "../api/openAI/openAI"
 
export default async function Page() {
  const session = await auth()
  if (!session) return <div>Not authenticated</div> 
  const favMovie = session.user.fav_movie
    let fact 
  if (favMovie != null) {
    fact = getMovieFact()
  }

  
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
        {favMovie == null ? (
      <div className="w-full max-w-2xl bg-gray-700 p-6 rounded-2xl shadow-md text-center mb-6">
        <form action = {setMovie}className="flex flex-row gap-y-2 p-2">
            <label htmlFor="">Enter your favorite Movie</label>
            <input name="favMovie" 
                    className="bg-gray-100 rounded-2xl p-2 ml-2 mr-2 text-gray-800" 
                    type="text" />
            <button type="submit">Submit</button>
        </form>
      </div>  
        ):(   
        
        <div className="w-full max-w-2xl bg-gray-700 p-6 rounded-2xl shadow-md text-center">
            {/* Movie Facts Box */}
            <h2 className="text-xl font-semibold text-gray-150 mb-2">Movie Fact 🎬</h2>
            <p className="text-gray-200">
            {fact}
            </p>
        </div>
        )}
    </div>
  )
}