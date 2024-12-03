import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');
    let projects: any;
    if (limit) {
        projects = await sql`select * from projects order by sort_order asc LIMIT ${limit};`;    
        return NextResponse.json({ projects }, { status: 200 });
    } else {
        projects = await sql`select * from projects order by sort_order asc`;
        return NextResponse.json({ projects }, { status: 200 });
    }
}