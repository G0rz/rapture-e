import Link from "next/link";
import {ViewTransition} from 'react'
import FuzzyText from "@/components/ui/not-found/fuzzy-text";
import {IoReturnDownBackOutline} from "react-icons/io5"

export const PageNotFound = () => {
    return (
        <ViewTransition>
            <div className="hidden md:block relative w-full h-screen shadow-bottom">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute w-full h-full"
                    controls={false}
                >
                    <source src="/videos/not-found.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-mono">
                    <div className="flex flex-wrap items-center justify-center text-shadow-lg">
                        <FuzzyText
                            baseIntensity={0.2}
                            hoverIntensity={0.5}
                            enableHover={true}
                        >
                            404
                        </FuzzyText>
                        <q className="w-full font-bold text-4xl my-4">NO GODS OR KINGS,<br/> ONLY MAN.</q>
                        <p className="text-xl"><span>Back to </span>
                            <Link href="/"
                                  className="hover:underline transition-all relative">
                                Rapture <IoReturnDownBackOutline className="absolute top-4 -right-1 size-8"/>
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
            <div
                className="block md:hidden relative min-h-screen w-full justify-center items-center text-center align-middle bg-rapture font-mono">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-mono">
                    <div className="flex flex-wrap items-center justify-center text-shadow-lg">
                        <FuzzyText
                            baseIntensity={0.2}
                            hoverIntensity={0.5}
                            enableHover={true}
                        >
                            404
                        </FuzzyText>
                        <q className="w-full font-bold text-3xl my-4">NO GODS OR KINGS,<br/> ONLY MAN.</q>
                        <p className="text-2xl"><span>Back to </span>
                            <Link href="/"
                                  className="hover:underline transition-all relative">
                                Rapture <IoReturnDownBackOutline className="absolute top-4 -right-1 size-8"/>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </ViewTransition>
    );
};
