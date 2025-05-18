import Image from 'next/image'
import { Skeleton } from './ui/skeleton';
export interface TImage{
    name: string;
    status: string;
    imageUrl: string;
}
export function ImageCard(props: TImage){
    return <div className="border-2 rounded-xl max-w-2xl p-2 cursor-pointer">
            <div className="flex p-4 gap-4 bg-red-200 space-between">
                {props.status === "Generated" ? <Image src={props.imageUrl} alt={props.name} className="rounded"/> : <Skeleton className='rounded h-40 w-300' />}
            </div>
        </div>
}

export function ImageCardSkeleton() {
    return <div className="border-2 rounded-xl max-w-2xl p-2 cursor-pointer w-full">
        <div className="flex p-4 gap-4 bg-red-200 space-between">
            <Skeleton className="rounded h-40 w-[400px]"/>
        </div>
    </div>
}