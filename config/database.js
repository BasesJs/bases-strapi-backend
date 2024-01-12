module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            connectionString: env('DATABASE_PRIVATE_URL','postgres://railway:piPprEmlz8GQ08bgbv*-HEbWUTMT1qFJ@postgres.railway.internal:5432/railway')
        },
        pool: { min: 0 }
    }
});