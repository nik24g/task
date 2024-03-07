const success = {
    SUCCESS: "success..",
    USER_CREATED: "User is created.",
    ADMIN_CREATED: "Admin is created.",
    NO_USER_FOUND: "No User Found Please do Sign Up first",
    OTP_CREATED: "OTP sent to your email Id. Now Please verify with OTP",
    USER_VERIFIED: "OTP verified, Now You can Login.",
    REGISTRATION_OTP_CREATED: "OTP sent to your email Id. Now Please Verify your account with OTP.",
    LOGGED_IN: "User logged in successfully",
    INVALID_OTP: "OTP is Invalid. Try again...",
    OTP_LIMIT: "You exceed your Wrong OTP limit. Now generate New OTP after 2 Minutes",
    ADMIN_LOGIN: "Logged in successfully",
    DELETED: "Deleted.",
    REACHED_LIMIT: "Limit reached.",
    PAYMENT_PENDING: "Payment is pending. Try again for payment status after 5 second.",
    SERVICE_ADDED: "Service added successfully.",
    ORDER_BOOKED: "Your order is booked successfully."
}
const error = {
    WRONG: "Something went wrong..",
    ALREADY_EMAIL: "Account is already found with this email id.",
    ALREADY_MOBILE: "Account is already found wtih this mobile number",
    ALREADY_ADMIN: "Admin is already registered.",
    NO_OTP: "Please Generate OTP First.",
    OTP_EXPIRED: "OTP is expired now. Please generate New OTP",
    INVALID_JWT: "Unauthorized access",
    WRONG_PASSWORD: "Wrong password.",
    WRONG_WITH_JWT: "Something went wrong with jwt token",
    USER_NOT_FOUND: "This is user not registerd. Please do sign Up first..",
    ADMIN_NOT_FOUND: "Admin not found. Please create new Admin",
    NO_USER: "User not found.",
    NOT_AUTHORIZED: "You are not authorized to perform this.",
    NO_ITEM: "No item found.",
    NO_JWT: "Token not found",
    MISSING_INPUTS: "Required input for registration are not found",
    NOT_FOUND: "Not found",
    PAYMENT_FAILED: "Payment is failed. Try again.",
    CAN_NOT_PERFORM_TASK: "Can not perform this task",
    CITY_NAME_REQ: "Bad request, City name is required to send.",
    COORDINATES_REQ: "Bad request, Co-ordinated is required to send.",
    SERVICE_NOT_FOUND: "Selected service is not found."
}

module.exports = { success, error};

//developed by Nitin Goswami