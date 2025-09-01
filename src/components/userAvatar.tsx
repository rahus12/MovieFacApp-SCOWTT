// from documents
// https://authjs.dev/getting-started/session-management/get-session
import { auth } from "../auth"
 
export default async function UserAvatar() {
  const session = await auth()
 
  if (!session?.user) return null
  const imageSrc = session.user.image || "https://37assets.37signals.com/svn/765-default-avatar.png"
 // need to add the domain in next.config.ts
 //lh3.googleusercontent.com
  return (
    <div className="flex items-center gap-3">
      
        <img
          src={imageSrc}
          alt="User avatar"
          className="w-10 h-10 rounded-full"
        />
      
      <div className="text-left">
        <p className="font-semibold">{session.user.name}</p>
        <p className="text-sm text-gray-500">{session.user.email}</p>
      </div>
    </div>
  )
}