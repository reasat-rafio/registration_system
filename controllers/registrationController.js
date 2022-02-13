import User from "../models/registration";

// @DESC     register a new user
// @METHOD  POST
// @ROUTE   /register
export const register_user = async (req, res) => {
  const user = req.body;
  try {
    const newUser = await User.create(user);

    res.status(201).json({
      success: true,
      data: newUser,
      error: "",
    });
    console.log(`new User is ${newUser}`);
  } catch (error) {
    res.status(201).json({
      success: false,
      error: error.message,
    });
    console.log(`User register error ${error}`);
  }
};

// @DESC    login an existing user
// @METHOD  POST
// @ROUTE   /login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const loginUser = await User.login(email, password);

    //user exist
    if (loginUser.user) {
      const { _id } = loginUser.user;

      res.status(200).json({
        success: true,
        user: loginUser.user,
      });
    }

    //user dont exit or password is wrong
    if (loginUser.error) {
      res.status(200).json({
        success: false,
        error: loginUser.error,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// @DESC    logout a new user
// @METHOD  GET
// @ROUTE   /logout
export const logout = async (req, res) => {
  try {
    // res.cookie("jwt", "", { maxAge: 1 });
    // res.cookie("id", "", { maxAge: 1 });
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// DESC     delete a user
// METHOD   DELETE
// ROUTE    /delete/:id
export const user_delete = async (req, res) => {
  try {
    // getting the id from request url
    const id = req.params.id;

    // finding the blog
    const user = await User.find({ _id: id });

    // if that blog dont exist
    if (!user) {
      res.status(200).json({
        success: false,
        error: "Blog dont exist",
      });
    }

    if (user && user.id == req.cookies.id) {
      // Deleting the blog from database
      await User.remove({ _id: id });

      res.status(200).json({
        success: true,
        data: all_blogs,
      });
    }
  } catch (error) {
    // server response if it fail to get the data
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
