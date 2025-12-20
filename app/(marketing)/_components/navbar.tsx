"use client";

import { useConvexAuth } from "convex/react";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react"; // Add this import

import { Logo } from "./logo";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  const [mounted, setMounted] = useState(false); // Add this

  // Add this useEffect
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}

        {/* Signed-out state */}
        <SignedOut>
          <SignInButton>
            <Button variant="ghost" size="sm">Log in</Button>
          </SignInButton>

          <SignInButton>
            <Button size="sm">Get Graphite free</Button>
          </SignInButton>
        </SignedOut>

        {/* Signed-in state */}
        <SignedIn>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/documents">Enter Graphite</Link>
          </Button>
          <UserButton />
        </SignedIn>

        {mounted && <ModeToggle />} {/* Only render when mounted */}
      </div>
    </div>
  );
};