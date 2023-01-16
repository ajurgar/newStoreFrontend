class Request {

    async get(url) {
        const reponse = await fetch(url);
        return reponse.json();
    }
}

export default Request;