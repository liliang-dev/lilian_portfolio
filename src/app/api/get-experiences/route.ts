import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');
    let experiences: any;
    if (limit) {
        experiences = await sql`select * from experiences order by from_year desc LIMIT ${limit};`;    
        return NextResponse.json({ experiences }, { status: 200 });
    } else {
        experiences = await sql`select * from experiences order by from_year desc`;
        return NextResponse.json({ experiences }, { status: 200 });
    }
}