// function to generate a random picture while creating the user
export function randomProfilePicGenerator(userName, gender) {
  const randomBoyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
  const randomGirlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
  if (gender === "male") {
    return randomBoyProfilePic;
  } else {
    return randomGirlProfilePic;
  }
}
