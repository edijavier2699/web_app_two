// define the type for the procees env to have access to the .env backend variable
declare namespace NodeJS {
    interface ProcessEnv {
        REACT_APP_BACKEND_URL: string;
    }
}
