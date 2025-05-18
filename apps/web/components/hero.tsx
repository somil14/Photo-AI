"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
import Image from "next/image"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export function Hero(){
const router = useRouter();

    return <div className="flex justify-center">
        <div className="max-w-6xl ">
        <h1 className="text-6xl p-2 text-center">
            Generate Images to leverage your profile and increase your online presence!
        </h1>
        <Carousel>
            <CarouselContent>
                <CarouselItem className="basis-1/4">
                    <img className="w-max-[400px]"
                        src="https://img.freepik.com/free-photo/ai-generated-cute-girl-pic_23-2150649920.jpg?t=st=1743860704~exp=1743864304~hmac=c570ccbcba8cd49d2d334f703d5b86f7c8f843dca6628adc3108e191cf5d5e0d&w=1380"
                        alt="demo-img"
                        width={500}
                        height={500}
                    />
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                    <img className="w-max-[400px]"
                        src="https://i.pngimg.me/thumb/f/720/cd844b54e6.jpg"
                        alt="demo-img"
                        width={500}
                        height={500}
                    />
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                    <img className="w-max-[400px]"
                        src="https://img.freepik.com/free-photo/portrait-elegant-professional-businesswoman_23-2150917246.jpg?t=st=1743861551~exp=1743865151~hmac=2ab26f221227f1b0cc3bd32ddde7cec8f54ed6452de0f21920b800e1d8932258&w=1380"
                        alt="demo-img"
                        width={500}
                        height={500}
                    />
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                    <img className="w-max-[400px]"
                        src="https://img.freepik.com/free-photo/ai-generated-cute-girl-pic_23-2150649920.jpg?t=st=1743860704~exp=1743864304~hmac=c570ccbcba8cd49d2d334f703d5b86f7c8f843dca6628adc3108e191cf5d5e0d&w=1380"
                        alt="demo-img"
                        width={500}
                        height={500}
                    />
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                    <img className="w-max-[400px]"
                        src="https://i.pngimg.me/thumb/f/720/cd844b54e6.jpg"
                        alt="demo-img"
                        width={500}
                        height={500}
                    />
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                    <img className="w-max-[400px]"
                        src="https://img.freepik.com/free-photo/portrait-elegant-professional-businesswoman_23-2150917246.jpg?t=st=1743861551~exp=1743865151~hmac=2ab26f221227f1b0cc3bd32ddde7cec8f54ed6452de0f21920b800e1d8932258&w=1380"
                        alt="demo-img"
                        width={500}
                        height={500}
                    />
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                    <img className="w-max-[400px]"
                        src="https://img.freepik.com/free-photo/ai-generated-cute-girl-pic_23-2150649920.jpg?t=st=1743860704~exp=1743864304~hmac=c570ccbcba8cd49d2d334f703d5b86f7c8f843dca6628adc3108e191cf5d5e0d&w=1380"
                        alt="demo-img"
                        width={500}
                        height={500}
                    />
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                    <img className="w-max-[400px]"
                        src="https://i.pngimg.me/thumb/f/720/cd844b54e6.jpg"
                        alt="demo-img"
                        width={500}
                        height={500}
                    />
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                    <img className="w-max-[400px]"
                        src="https://img.freepik.com/free-photo/portrait-elegant-professional-businesswoman_23-2150917246.jpg?t=st=1743861551~exp=1743865151~hmac=2ab26f221227f1b0cc3bd32ddde7cec8f54ed6452de0f21920b800e1d8932258&w=1380"
                        alt="demo-img"
                        width={500}
                        height={500}
                    />
                </CarouselItem>
            </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>

            <div className="flex justify-center">
                <SignedIn>
                    <Button onClick={() => {
                        router.push("/dashboard")
                    }} className="mt-4 px-16 py-6" size={"lg"} variant={"secondary"}>
                        Dashboard
                    </Button>
                </SignedIn>
                <SignedOut>
                    <Button className="mt-4 px-16 py-6" size={"lg"} variant={"secondary"}>
                        <SignInButton / >
                    </Button>
                </SignedOut>
            </div>
        </div>
    </div>
}