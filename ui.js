class UI {
    constructor() {
        this.location = document.getElementById("w-location");
        this.desc = document.getElementById("w-desc");
        this.string = document.getElementById("w-string");
        this.details = document.getElementById("w-details");
        this.icon = document.getElementById("w-icon");
        this.humidity = document.getElementById("w-humidity");
        this.feelsLike = document.getElementById("w-feels-like");
        this.dewpoint = document.getElementById("w-dewpoint");
        this.wind = document.getElementById("w-wind");
        this.pressure = document.getElementById("w-pressure");
    }

    paint(weather) {
        this.location.textContent = weather.place.name + ", " + weather.place.state.toUpperCase();
        this.desc.textContent = weather.ob.weather;
        this.string.textContent = weather.ob.tempF + " F\xB0";
        this.icon.setAttribute("src", weather.ob.icon);
        this.humidity.textContent = `Relative humidity: ${weather.ob.humidity}%`;
        this.feelsLike.textContent = `Feels like: ${weather.ob.feelslikeF} F\xB0`;
        this.dewpoint.textContent = `DewPoint: ${weather.ob.dewpointF} F\xB0`;
        this.wind.textContent = `Wind: ${weather.ob.windDir} ${weather.ob.windSpeedMPH} meters/hour`;
        this.pressure.textContent = `Pressure: ${weather.ob.pressureIN}`;
    }
}