let jsonData = {
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Ayush",
        "last": "Sullad"
      },
      "location": {
        "street": {
          "number": 7409,
          "name": "Rajpur Rd"
        },
        "city": "Jamalpur",
        "state": "Delhi",
        "country": "India",
        "postcode": 17280,
        "coordinates": {
          "latitude": "6.0514",
          "longitude": "-94.6609"
        },
        "timezone": {
          "offset": "-9:00",
          "description": "Alaska"
        }
      },
      "email": "ayush.sullad@example.com",
      "login": {
        "uuid": "2e1bb641-8bc9-4cbc-84d9-568a43bb043c",
        "username": "smallmouse384",
        "password": "control",
        "salt": "ITXJUQWb",
        "md5": "78e2644af069a1aeee02d3a97b788823",
        "sha1": "221c63597bb7fd26431912a194d625a30f0b199b",
        "sha256": "6f356b02211f79af191f0dfe008628a40a99f141fd31fbb35cd6de7cf58f13fb"
      },
      "dob": {
        "date": "1966-01-12T22:17:49.827Z",
        "age": 57
      },
      "registered": {
        "date": "2012-09-22T15:08:54.066Z",
        "age": 10
      },
      "phone": "7267022724",
      "cell": "8810177529",
      "id": {
        "name": "UIDAI",
        "value": "936167373717"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/65.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/65.jpg"
      },
      "nat": "IN"
    }
  ],
  "info": {
    "seed": "57fce95d221f0dc3",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
};

// get references
let body = document.querySelector("body");

// get email from JSON data
let email = jsonData.results[0].email;
console.log(email);

// output email to the webpage
let newElement = document.createElement("p");
newElement.innerHTML = email;
body.appendChild(newElement);

// get gender from the JSON data
let gender = jsonData.results[0].gender;
console.log(gender);

// change the background color based on gender 
if (gender == "male") {
  body.style.backgroundColor = "lightblue";
}

else {
  body.style.backgroundColor = "pink";
}

// get name from JSON data 
let title = jsonData.results[0].name.title;
let firstName = jsonData.results[0].name.first;
let lastName = jsonData.results[0].name.last;
let fullName = title + " " + firstName + " " + lastName;
console.log(fullName);

// output fullName to the webpage
let newElement2 = document.createElement("h1");
newElement2.innerHTML = "Welcome, " + fullName;
body.appendChild(newElement2);

// get picture from JSON data
let pictureLink = jsonData.results[0].picture.large;
console.log(pictureLink);

// output picture to the webpage
let newElement3 = document.createElement("img");
newElement3.src = pictureLink;
body.appendChild(newElement3);

// JavaScript reads code asynchronously
data = jsonData.results[0].email;
