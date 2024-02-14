const validate = (email, password, firstName, lastName, isSignIn) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (isSignIn) {
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (isPasswordValid && isEmailValid) return "User Logged in Successfully!";
  } else {
    const isFirstNameValid = /^[a-zA-Z]+$/.test(firstName);
    const isLastNameValid = /^[a-zA-Z]+$/.test(lastName);
    if (!isFirstNameValid) return "First Name is not valid";
    if (!isLastNameValid) return "Last Name is not valid";
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (isPasswordValid && isEmailValid) return "User Created Successfully!";
  }
};
export default validate;
