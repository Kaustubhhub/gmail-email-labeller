const createConfig = (url: string, accessToken: string) => {
    return {
        method: 'get',
        url,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    };
};

export default createConfig;
