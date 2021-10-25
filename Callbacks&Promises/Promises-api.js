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
      res({
        ...usersAndRepos,
        commits: ["commit1", "commit2", "commit3", "commit4", "commit5"],
      });
      //   rej(new Error("Error occured while fetching commits!"));
    }, [1000]);
  });
};

const printDetails = (userObj) => {
  const { user_name, repos, commits } = userObj;
  console.log(
    `The user ${user_name.userName} has ${repos.length} repos and ${commits.length} commits!`
  );
};

getUserName(1)
  .then((user) => getUserRepos(user))
  .then((userAndRepos) => getCommits(userAndRepos))
  .then((value) => printDetails(value))
  .catch((err) => console.log(err));
