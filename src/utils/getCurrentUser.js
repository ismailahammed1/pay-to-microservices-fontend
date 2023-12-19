const getCurrentUser = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    return user;
  };
  
export default getCurrentUser;