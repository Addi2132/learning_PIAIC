function describeCity(city, country) {
    if (country === void 0) { country = 'Default Country'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCity('Karachi', 'Pakistan');
describeCity('Istambol', 'Turkey');
describeCity('New York'); // Using the defult country
