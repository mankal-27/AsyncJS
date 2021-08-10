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
  
// loginUser("Manju", "12mankal")
//   .then((user) => getUserVideos(user.email))
//   .then((videos) => videoDetails(videos[0]))
//   .then((detail) => console.log(detail));

async function displayUser(){
    const logUser = await loginUser("Manju", "12man");
    const videos = await getUserVideos(loginUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
}

displayUser();