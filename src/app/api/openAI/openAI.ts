import OpenAI from 'openai';
import { auth } from '@/auth';

export async function getMovieFact() {
    const client = new OpenAI({
        apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
    });

    const session = await auth()
    const movie = session.user.fav_movie

    const completion = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
        { role: 'developer', content: 'you are an agent that gets random information about movies' },
        { role: 'user', content: `Generate a random funny fact about the movie: ${movie} keep it under 200 characters` },
    ],
    });

console.log(completion.choices[0].message.content);
return completion!.choices[0]!.message!.content!.toString()
    
}

