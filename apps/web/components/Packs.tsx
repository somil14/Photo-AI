import { BACKEND_URL } from "@/app/config";
import axios from "axios";
import { PackCard, TPack } from "./packCard";
import { useState } from "react";


async function getPacks(): Promise<TPack[]> {
    const res = await axios.get(`${BACKEND_URL}/pack/bulk`)
    return res.data.packs ?? [];
}

export async function Packs(){
    const packs = await getPacks();
    const [selectModelId, setSelectedModelId] = useState<>();
    return <div className="grid md:grid-cols-3 gap-4 p-4 grids-cols-1">
        {packs.map(p => <PackCard selectedModelId={selectedModelId} {...p} />)}
    </div>
}