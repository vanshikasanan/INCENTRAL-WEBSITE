export const authPage = {
  metadata: {
    title: "Sign In",
    description:
      "Sign in or create an InCentral account to continue to checkout or access orders.",
  },
  aside: {
    eyebrow: "My InCentral",
    title: "Sign In",
    lead: "Your cart stays saved while you sign in.",
    body: "Sign in to continue to checkout or access your InCentral account. New customers can create an account here.",
    journey: [
      {
        title: "Your cart stays in InCentral",
        description: "Choose plans and add them to your cart.",
      },
      {
        title: "Sign in or create an account here",
        description:
          "Your cart stays saved when you sign in or create an account.",
      },
      {
        title: "Continue to secure checkout",
        description: "Review your order before payment.",
      },
    ],
  },
  tabs: {
    signIn: "Sign In",
    create: "Create Account",
  },
  signIn: {
    title: "Welcome back",
    description: "Enter the email or mobile number linked to your account.",
    submit: "Sign In",
    privacyNote:
      "Your account details are submitted securely.",
    privacyHref: "/policies/privacy-notice",
  },
  create: {
    eyebrow: "New to InCentral?",
    title: "Create your account",
    description:
      "Enter your details to create an account and continue with your saved cart.",
    submit: "Create Account",
    termsHref: "/policies/terms-conditions",
    privacyHref: "/policies/privacy-notice",
  },
  checkoutContext: {
    message: "Your cart is saved.",
    detail: "Sign in or create an account to continue to checkout.",
    backLabel: "Back to Cart",
    cartHref: "/cart",
  },
  messages: {
    passwordMismatch: "The passwords do not match.",
    signedIn: "Signed in.",
    accountCreated: "Account created.",
    signedInBrowse:
      "Signed in. You can continue browsing InCentral.",
    accountCreatedBrowse:
      "Account created. You are signed in and can continue browsing InCentral.",
    notConnected:
      "Account sign-in is not connected in this preview.",
  },
  demoAuthEnabled: true,
  accountHref: "/account",
  signInHref: "/sign-in?mode=login",
} as const;

export type AuthTab = "signin" | "create";
