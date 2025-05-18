import { BACKEND_URL } from '@/app/config';
import axios from 'axios';
import Image from 'next/image'
import { useAuth } from "@clerk/nextjs"


export interface TPack{
    id: string;
    name: string;
    imageUrl1: string;
    imageUrl2: string;
    description: string;
}
export function PackCard(props: TPack & {selectedModelId: string}){
    const { getToken } = useAuth();

    return <div className="rounded-xl hover:border-red-300 border-2 max-w-2xl p-2 cursor-pointer" onClick={async () => {
        const token = await getToken();
        await axios.post(`${BACKEND_URL}/pack/generate`, {
            packId: props.id ,
            modelId: props.id
        }, {
            headers: {
                Authorisation: `Bearer ${token}`,
            }
        })
    }}>
        <div className="flex p-4 gap-4">
            <Image src={props.imageUrl1} alt={`${props.name} image 1`} className="max-w-[300px] rounded"/>
            <Image src={props.imageUrl2} alt={`${props.name} image 2`} className="max-w-[300px] rounded"/>
        </div>

        <div className="text-xl font-bold pb-2">
            {props.name}
        </div>

         <div className="text-sm">
            {props.description}
         </div>
    </div>
}