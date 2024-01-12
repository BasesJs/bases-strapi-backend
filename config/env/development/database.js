module.exports = ({ env }) => ({
    connection: {
        connection: {
            connectionString: env('DATABASE_URL', 'postgres://railway:piPprEmlz8GQ08bgbv*-HEbWUTMT1qFJ@viaduct.proxy.rlwy.net:45036/railway')
        }
    }
});
