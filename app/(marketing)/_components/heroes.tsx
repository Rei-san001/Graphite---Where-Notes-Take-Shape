import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">

                    <Image 
                        src="/zombieing.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="Zombieing"
                    />
                    <Image 
                        src="/zombieing-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Zombieing"
                    />
                </div>
                <div className="relative h-[300px] w-[300px] hidden md:block">

                    <Image 
                        src="/reading.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="Reading"
                    />
                    <Image
                        src="/reading-dark-1.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Reading"
                    />
                </div>
            </div> 
        </div>
    )
}
