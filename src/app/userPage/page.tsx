//from doc https://authjs.dev/getting-started/session-management/protecting

import { auth } from "@/auth"
import {SignOut} from "@/components/auth/sign-inOut-button"
import UserAvatar from "@/components/userAvatar"
 
export default async function Page() {
  const session = await auth()
  if (!session) return <div>Not authenticated</div>
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      
      {/* Profile Box */}
      <div className="flex items-center gap-4 w-full max-w-md bg-white p-6 rounded-2xl shadow-md mb-6">
        <UserAvatar />
        <div className="ml-auto">
          <SignOut />
        </div>
      </div>

      {/* Movie Facts Box */}
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Movie Fact 🎬</h2>
        <p className="text-gray-600">
          Did you know? The movie *Inception* had over 500 visual effects shots, 
          most of which were created with practical effects rather than CGI.
        </p>
      </div>
    </div>
  )
}