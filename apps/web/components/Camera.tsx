"use client"
import { useAuth } from "@clerk/nextjs"
import { BACKEND_URL } from "@/app/config";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ImageCard, ImageCardSkeleton, TImage } from "./imageCard";
import { Skeleton } from "./ui/skeleton";

export  function Camera(){
    const [images, setImages] = useState<TImage[]>([]);
    const [imagesLoading, setImagesLoading] = useState(true);
    const { getToken } = useAuth()

    useEffect(() => {
        (async() => {
            const token = await getToken();
            const response = axios.get(`${BACKEND_URL}/image/bulk`, {
                headers: {
                    "Authorisation": `Bearer ${token}`,
                }
            })
            setImages((await response).data.images);
            setImagesLoading(false);
        })()
    }, [getToken])

    return <div className="grid md:grid-cols-4 grid-cols-1 gap-2">
        {images.map(image => <ImageCard {...image} />)}
        { imagesLoading || !imagesLoading && <><ImageCardSkeleton></ImageCardSkeleton> <ImageCardSkeleton></ImageCardSkeleton> <ImageCardSkeleton></ImageCardSkeleton></> }
    </div>
}
