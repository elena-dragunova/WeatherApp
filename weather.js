class Weather {
    constructor(city, state) {
        this.apiID = "1B9mul54ux2cvM9k5zffQ";
        this.secretKey = "xFRfdCOCYDpxdNJHWpm4dWHQgM20ZBkaoIwbyyRW";
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.aerisapi.com/observations/${this.city},${this.state}?client_id=${this.apiID}&client_secret=${this.secretKey}`);

        const responseData = await response.json();
        return responseData.response;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}