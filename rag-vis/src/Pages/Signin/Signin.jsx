import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {

  return (

    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-50
      dark:bg-gray-950
      px-4
      "
    >

      <div
        className="
        bg-white
        dark:bg-gray-900
        p-8
        rounded-2xl
        shadow-xl
        "
      >

        <SignIn
          appearance={{
            elements: {
              card: "shadow-none",
              headerTitle:
                "text-2xl font-bold",
              formButtonPrimary:
                "bg-blue-600 hover:bg-blue-700"
            }
          }}
        />

      </div>

    </div>

  );
}