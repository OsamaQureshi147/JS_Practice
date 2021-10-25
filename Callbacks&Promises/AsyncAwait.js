const getUserName = (userID) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Getting username...");
      res({ userID, userName: "OsamaQureshi147" });
      //   rej(new Error("Error occured while fetching username!"));
    }, [1000]);
  });
};

const getUserRepos = (user_name) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Getting repos...");
      res({ user_name, repos: ["repo1", "repo2"] });
      //   rej(new Error("Error occured while fetching repos!"));
    }, [1000]);
  });
};

const getCommits = (usersAndRepos) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Getting commits...");
      //   res({
      //     ...usersAndRepos,
      //     commits: ["commit1", "commit2", "commit3", "commit4", "commit5"],
      //   });
      rej(new Error("Error occured while fetching commits!"));
    }, [1000]);
  });
};

const printDetails = (userObj) => {
  const { user_name, repos, commits } = userObj;
  console.log(
    `The user ${user_name.userName} has ${repos.length} repos and ${commits.length} commits!`
  );
};

async function getData() {
  try {
    const user = await getUserName(12);
    const userAndRepos = await getUserRepos(user);
    const userObj = await getCommits(userAndRepos);
    printDetails(userObj);
  } catch (error) {
    console.error(error);
  }
}
// getData();

// Promise.all returns the reponse when all promise are resolved. Otherwise it will catch error
// Promise.all([getUserName(12), getUserRepos(), getCommits()])
//   .then((res) => console.log(res))
//   .catch((e) => console.log(`e.message`, e.message));

// Promise.allSettled runs all the promises in parallel and returns the response of both the cases (reject and resolve) for each promise
Promise.allSettled([getUserName(12), getUserRepos(), getCommits()])
  .then((res) => console.log(res))
  .catch((e) => console.log(`e.message`, e.message));

//  Promise.race returns the response of the first promise that is resolved
// Promise.race([getUserName(12), getUserRepos(), getCommits()])
//   .then((res) => console.log(res))
//   .catch((e) => console.log(`e.message`, e.message));
