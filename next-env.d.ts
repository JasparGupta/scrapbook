/// <reference types="next" />
/// <reference types="next/types/global" />
declare namespace NodeJS {
    export interface ProcessEnv {
        APP_NAME: string,
        APP_URL: string,
        MYSQL_DATABASE: string,
        MYSQL_HOSTNAME: string,
        MYSQL_PASSWORD: string,
        MYSQL_PORT: number,
        MYSQL_USERNAME: string,
        NEXT_PUBLIC_APP_NAME: string,
        NEXT_PUBLIC_APP_URL: string,
        REDIS_HOST: string,
        REDIS_PASSWORD: string,
        REDIS_PORT: number,
    }
}
