function weatherInfo(temp) {
    var c = temp
    if (temp > 0) {
        return (temp + " is freezing temperature")
    } else {
        return (temp + " is above freezing temperature")

    }

    function convertToCelsius(temperature) {
        var celsius = (temperature) - 32 + (5 / 9)
        return celsius
    }
}

console.log(weatherInfo(50), '10 is above freezing temperature')
console.log(weatherInfo(23), '-5 is freezing temperature')