import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { Textarea } from "./ui/textarea";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/app/config";
import { useAuth } from "@clerk/nextjs"

interface TModel{
    id: string;
    thumbnail: string;
    name: string;
}

export function SelectModels(setSelectedModel:{
    setSelectedModel: (model: string) => void;
})  {

    const { getToken } = useAuth();
    const [models, setModels] = useState<TModel[]>([]);
    const [modelLoading, setModelLoaing] = useState (true);


    useEffect(() => {
        (async() => {
            const token = await getToken();
            const response = axios.get(`${BACKEND_URL}/models`, {
                headers: {
                    "Authorisation": `Bearer ${token}`,
                }
            })
            setModels((await response).data.models); //if this throws error, remove await and from here and from Camera.tsx
            setSelectedModel((await response).data.models[0]?.id)
            setModelLoaing(false)
        })()
    }, [getToken])

    return <>
        <div className="text-2xl pb-2 max-w-4xl">
            Select Model
        </div>
        <div className="max-w-2xl">
            <div className="grid grid-cols-4 gap-2 p-4">
                {models.map(model => <div className={`${selectedModel === model.id ? "border-red-300" : ""} cursor-pointer rounded border p-2`} key={model.id} onClick={() => {
                    setSelectedModel(model.id);
                }}>
                    <div className="flex justify-between flex-col h-full">
                        <div>
                            <Image src={model.thumbnail} alt="model thumbnail" className="rounded"/>
                        </div>
                        <div className="p-8">
                            {model.name}
                        </div>
                    </div>
                </div>)}
            </div>
                {modelLoading && <div className="flex gap-2 p-4">
                    <Skeleton className="h-40 w-full rounded" />
                    <Skeleton className="h-40 w-full rounded" />
                    <Skeleton className="h-40 w-full rounded" />
                    <Skeleton className="h-40 w-full rounded" />
                </div>}
        </div>
    </>
}