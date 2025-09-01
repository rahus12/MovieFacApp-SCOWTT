"use server"

import { prisma } from "@/lib/prisma"
import { auth } from "@/auth"
import { json } from "stream/consumers"

export async function setMovie(formData: FormData) {
    const session = await auth()
    const favMovie = formData.get("favMovie")?.toString()
    // const currUser = await prisma.user.findUnique({
    //     where: {
    //         email: session!.user!.email!
    //     }
    // })
    
    await prisma.user.update({
        where: {
            email: session!.user!.email!
        },
        data: {
            fav_movie: favMovie!
        }
    })
    // console.log(JSON.stringify(currUser))
    console.log(JSON.stringify(session))
}