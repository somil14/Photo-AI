"use client "
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useAuth } from "@clerk/nextjs"
import { BACKEND_URL } from "@/app/config";
import axios from "axios";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { SelectModels } from "./Models";

export function GenerateImage() {
    const [prompt, setPrompt] = useState("");
    const [selectedModel, setSelectedModel] = useState<string>();
    const [models, setModels] = useState([]);
    const [modelLoading, setModelLoading] = useState(true);

    const { getToken } = useAuth();

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
            setModelLoading(false)
        })()
    }, [getToken])

    return <div className="h-[60vh] items-center justify-center flex">
        <div>
            <SelectModels setSelectedModel={setSelectedModel} />
            <div className="flex justify-center">
                <Textarea onChange={(e) => {
                    setPrompt(e.target.value);
                }} placeholder="Describe the image that you'd like to see here!" className="py-6 px-4 w-2xl border border-blue-200 hover:border-blue-300 focus:border-blue-400 outine-none"></Textarea>
            </div>
                <div className="flex justify-center">
                    <Textarea onChange={(e) => {
                        setPrompt(e.target.value);
                    }} placeholder="Describe the image that you'd like to see here!" className="py-6 px-4 w-2xl border border-blue-200 hover:border-blue-300 focus:border-blue-400 outine-none"></Textarea>
                </div>
                <div className="flex justify-center">
                    <Button onClick={async () => {
                        const token = await getToken();
                        await axios.post(`${BACKEND_URL}/ai/generate`, {
                            prompt,
                            modelId: selectedModel,
                            num: 1
                        }, {
                            headers: {
                                Authorisation: `Bearer ${token}`,
                            }
                        })
                        /// alert here
                    }} variant={"secondary"}>Create Image</Button>
                </div>
            </div>
        </div>
}