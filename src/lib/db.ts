import { Pool } from 'pg';

const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
    ssl: process.env.POSTGRES_SSLMODE === 'require' ? { rejectUnauthorized: false } : undefined,
});

export const query = async <T>(text: string, params?: any[]): Promise<T[]> => {
    const client = await pool.connect();
    try {
        const res = await client.query(text, params);
        return res.rows;
    } finally {
        client.release();
    }
};