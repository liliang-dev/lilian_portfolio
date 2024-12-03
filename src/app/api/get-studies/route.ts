import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');
    let studies: any;
    if (limit) {
        studies = await sql`select * from studies order by from_year desc LIMIT ${limit};`;    
        return NextResponse.json({ studies }, { status: 200 });
    } else {
        studies = await sql`select * from studies order by from_year desc`;
        return NextResponse.json({ studies }, { status: 200 });
    }
}