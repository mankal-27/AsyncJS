console.log("Start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we are getting the data");
      resolve({ userEmail: email });
    }, 3000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of the video");
    }, 2000);
  });
}

loginUser("Manju", "12mankal")
  .then((user) => getUserVideos(user.email))
  .then((videos) => videoDetails(videos[0]))
  .then((detail) => console.log(detail));

console.log("Finished");

const yt = new Promise( resolve => {
    setTimeout(() => {
        console.log("Getting stuff from youtube");
        resolve({videos : [1,2,3,4,5]});
    }, 2000);
});

const fb = new Promise( resolve => {
    setTimeout(() => {
        console.log("Getting stuff from Facebook");
        resolve({user : "mankal27"});
    }, 4000);
});

Promise.all([yt,fb]).then(result => console.log(result));

