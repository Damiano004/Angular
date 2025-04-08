interface HttpRes{
    body: unknown,
    state: string,
    error:  HttpError | null
};

interface HttpError{
    statusCode: number,
    message: string,
    stackTrace: unknown
};

export const createHTTPResponseOK = (row: unknown) => {
    
    const response: HttpRes = {
        body: JSON.stringify(row),
        state: 'OK',
        error: null
    };
    
    return {
        statusCode: 200,
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(response)
    };
};

export const createHTTPResponseKO = (error: Error) => {
    const response: HttpRes = {
        body: null,
        state: 'KO',
        error: {
            statusCode: 500,
            message: error.message,
            stackTrace: error.stack
        }
    };
    return {
        statusCode: 500,
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(response)
    };
};