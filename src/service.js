const url_base = 'http://localhost:6001/bots'
class BotApiService {
    // GET /bots
    getAll() {
        return fetch(url_base).then(resp => resp.json())
    }

    // POST /bots
    create(data) {
        return fetch(url_base, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
    }

    // UPDATE /bots/:id
    delete(id) {
        let url = `${url_base}/${id}`
        return fetch(url, {
            method: 'DELETE',
        }).then(resp => resp.json())
    }
}

const BotService = new BotApiService();
export default BotService;