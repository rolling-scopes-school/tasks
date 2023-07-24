### Issue RSS-ECOMM-2_12: Implement error handling for failed registration attempts (15 points) 🛑

#### Description

Implement error handling for_failed_registration_attempts, including, but not limited to, the following scenarios:

- An email address that already exists in the system: Inform the user that an account with the provided email address already exists, and suggest that they either log in or use another email address. 📧🔒
- Server-side issues during registration: Display a user-friendly error message to inform the user that something went wrong during the registration process and that they should try again later. ⚠️🔄
- Invalid input that bypasses client-side validation: Ensure any input that somehow bypasses client-side validation is appropriately handled by backend error handling. 🔄🛡️

Display user-friendly error messages that inform users about the issues and how to correct them. You can follow the UI suggestions mentioned in [RSS-ECOMM-2_10](./RSS-ECOMM-2_10.md) for effectively highlighting the errors. Some of the suggested methods include using colors, icon indicators, border styling, and tooltips or popovers to make error messages clear, concise, and visually accessible. 🌈✅

#### Acceptance Criteria

- Proper error handling during the registration process 🛠️
- Display user-friendly error messages for_failed_registration_attempts, including the scenarios mentioned above 🗂️👀
- Selected UI elements are used effectively to highlight failed registration attempt errors and improve user experience 🖌️🎨

#### Useful Links and Resources

1. [toastify-js](https://github.com/apvarun/toastify-js#readme) 🍞🔥

And remember, even though we're implementing error handling, "Every rose has its thorn", as the band Poison sings, and these errors are just another way to grow and learn! 🌹🎸
