class SapBody {
    email;
    password;

    constructor(email, password) {

        this.email=email;
        this.password=password
    }

}


class SapToken {
    token;
    expiration;

    constructor(data) {
        this.token = data.token;
        this.expiration = data.expiration;
    }
}


module.exports = {
    SapBody,
    SapToken
}

