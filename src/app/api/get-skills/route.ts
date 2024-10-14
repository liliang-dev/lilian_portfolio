import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const skillName = searchParams.get('name');
    let skills: any;
    if (skillName) {
        skills = await sql`SELECT * FROM skills WHERE name='${skillName}';`;    
        return NextResponse.json({ skills }, { status: 200 });
    } else {
        skills = await sql`SELECT * FROM skills;`;
        return NextResponse.json({ skills }, { status: 200 });
    }
}