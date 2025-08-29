export function getFriendlyErrorMessage(errorCode: string): string {
    switch (errorCode) {
        case "auth/invalid-email":
            return "Email address is not valid.";
        case "auth/user-disabled":
            return "This user account has been disabled.";
        case "auth/user-not-found":
        case "auth/wrong-password":
        case "auth/invalid-credential":
            return "Incorrect email or password. Please try again.";
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
        case "auth/provider-already-linked":
            return "This provider is already linked to your account.";
        case "auth/no-such-provider":
            return "No such authentication provider is linked to this account.";
        case "auth/invalid-verification-code":
            return "The verification code is invalid.";
        case "auth/invalid-verification-id":
            return "The verification ID is invalid.";
        case "auth/missing-verification-code":
            return "Verification code is required.";
        case "auth/missing-verification-id":
            return "Verification ID is required.";
        case "auth/unauthorized-domain":
            return "This domain is not authorized for authentication.";
        case "auth/unsupported-persistence-type":
            return "Unsupported persistence type.";
        case "auth/operation-not-supported-in-this-environment":
            return "Operation not supported in this environment.";
        case "auth/invalid-custom-token":
            return "Custom token format is incorrect.";
        case "auth/custom-token-mismatch":
            return "Custom token does not correspond to the project.";
        case "auth/invalid-user-token":
            return "User token is invalid.";
        case "auth/weak-password":
            return "Password should be at least 6 characters.";
        // Forgot Password specific errors
        case "auth/missing-android-pkg-name":
            return "Missing Android package name for app link.";
        case "auth/missing-continue-uri":
            return "A valid continue URL must be provided in the request.";
        case "auth/missing-ios-bundle-id":
            return "Missing iOS bundle ID for app link.";
        case "auth/invalid-continue-uri":
            return "The continue URL provided in the request is invalid.";
        case "auth/unauthorized-continue-uri":
            return "The domain of the continue URL is not whitelisted.";
        case "auth/user-not-found":
            return "No user found with this email.";
        case "auth/expired-action-code":
            return "The password reset link has expired.";
        case "auth/invalid-action-code":
            return "The password reset link is invalid.";
        default:
            return "Something went wrong. Please try again later.";
    }
}
