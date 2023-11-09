function describeCity(city: string, country: string = 'Default Country') {
    console.log(`${city} is in ${country}.`);
}

describeCity('Karachi', 'Pakistan');
describeCity('Istambol', 'Turkey');
describeCity('New York'); // Using the defult country