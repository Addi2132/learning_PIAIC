function createCar(manufacturer: string, modelName: string, ...options: Record<string, any>[]): Record<string, any> {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };

    // Add additional options to the car Object
    options.forEach(option => {
        const key = Object.keys(option)[0];
        car[key] = option[key];
    });

    return car;
}
const carInfo = createCar('Toyota', 'Camry', { color: 'Blue' }, { features: ['Navigation', 'Sunroof'] });

console.log(carInfo);