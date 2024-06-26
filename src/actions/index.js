"use server";

import connectToDB from "@/database";
import User from "@/models/user";

// add new user action
export async function addNewUserAction(formData) {
  await connectToDB();

  try {
    // validate data using JOI

    const newlyCreatedUser = await User.create(formData);
    if (newlyCreatedUser) {
      return {
        success: true,
        message: "User added successfully",
      };
    } else {
      return {
        success: false,
        message: "Some error occurred. Try again later",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Internal Error. Try again later",
    };
  }
}

// fetch user actions

// edit a user action

// delete a user action
