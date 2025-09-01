// from documents
// https://authjs.dev/getting-started/session-management/get-session
import { auth } from "../auth"
 
export default async function UserAvatar() {
  const session = await auth()
 
  if (!session?.user) return null
 // need to add the domain in next.config.ts
 //lh3.googleusercontent.com
  return (
    <div>
      {session?.user?.image && (
        <img src={session.user.image} alt="User avatar" />
      )}
    </div>
  )
}