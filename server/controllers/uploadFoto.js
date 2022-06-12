cloudinary.config({
    cloud_name: 'geekit',
    api_key: '282731594457536',
    api_secret: 'Nn6hubJJj6g1wxY4RXOtG88jDu8'
});

image = cloudinary.image("couple.jpg", {width: 100, height: 100, gravity: "faces", crop: "thumb"})

console.log(image)