import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
import { Button } from './ui/button'

export function AppBar() {
    return <div className='flex justify-between p-4 border-b'>
        <div className='text-xl'>
            ProFile AI
        </div>
        <div>
            <SignedOut>
                <Button variant={"ghost"}>
                    <SignInButton />
                </Button>
            </SignedOut>
            <SignedIn>
                    <UserButton />
            </SignedIn>
        </div>
    </div>
} 