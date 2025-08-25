export function getFriendlyErrorMessage(errorCode: string): string {
    switch (errorCode) {
        case "auth/invalid-email":
            return "Email address is not valid.";
        case "auth/user-disabled":
            return "This user account has been disabled.";
        case "auth/user-not-found":
            return "No user found with this email.";
        case "auth/wrong-password":
            return "Incorrect password. Please try again.";
        case "auth/email-already-in-use":
            return "This email is already registered. Try logging in.";
        case "auth/operation-not-allowed":
            return "Authentication method is not enabled. Contact support.";
        case "auth/weak-password":
            return "Password is too weak. Please choose a stronger password.";
        case "auth/popup-closed-by-user":
            return "Authentication popup was closed before completion.";
        case "auth/cancelled-popup-request":
            return "Authentication popup request was cancelled.";
        case "auth/timeout":
            return "Request timed out. Please try again.";
        case "auth/too-many-requests":
            return "Too many requests. Please wait and try again later.";
        case "auth/network-request-failed":
            return "Network error. Please check your internet connection.";
        case "auth/user-token-expired":
            return "Session expired. Please login again.";
        case "auth/requires-recent-login":
            return "Please login again and try this action.";
        case "auth/invalid-action-code":
            return "Invalid or expired action code.";
        case "auth/expired-action-code":
            return "This action code has expired.";
        case "auth/missing-email":
            return "Email is required.";
        case "auth/invalid-password":
            return "Password is invalid or too weak.";
        case "auth/account-exists-with-different-credential":
            return "An account already exists with a different sign-in method.";
        case "auth/auth-domain-config-required":
            return "Authentication configuration is required.";
        case "auth/credential-already-in-use":
            return "This credential is already linked to another user.";
        default:
            return "Something went wrong. Please try again later.";
    }
}
