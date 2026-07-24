import { Link } from "react-router-dom";
import { Brain, User } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

import ThemeToggle from "../ThemeToogle";

export default function Navbar(){

const isLoggedIn = false; // later connect Clerk


return (

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b">

<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


{/* Logo */}

<Link 
to="/"
className="flex items-center gap-2"
>


<div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl text-white">

<Brain/>

</div>


<span className="text-xl font-bold">

AI Visualizer

</span>


</Link>



{/* Navigation */}

<div className="hidden md:flex gap-8">


<Link 
to="/"
className="hover:text-blue-600"
>
Home
</Link>


<Link 
to="/about"
className="hover:text-blue-600"
>
About
</Link>



<Link 
to="/features"
className="hover:text-blue-600"
>
Features
</Link>



<Link 
to="/contact"
className="hover:text-blue-600"
>
Contact
</Link>


</div>





{/* Auth */}


<div className="flex items-center gap-4">

  <ThemeToggle />

  <SignedOut>
    <div className="flex gap-4">

      <Link
        to="/sign-in"
        className="px-4 py-2 rounded-lg border"
      >
        Sign In
      </Link>

      <Link
        to="/sign-up"
        className="px-4 py-2 rounded-lg bg-blue-600 text-white"
      >
        Sign Up
      </Link>

    </div>
  </SignedOut>

  <SignedIn>
    <UserButton
      afterSignOutUrl="/"
      appearance={{
        elements: {
          userButtonAvatarBox: "w-10 h-10",
        },
      }}
    />
  </SignedIn>

</div>
</div>

</nav>


)

}