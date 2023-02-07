class Request {

    async get(url) {
        const reponse = await fetch(url);
        return reponse.json();
    }

    post(url, payload) {
        return fetch(url, {
            method: "POST",
            headers: {"Content-type": "application/json" },
            body: JSON.stringify(payload)
        });
    }
}

export default Request;