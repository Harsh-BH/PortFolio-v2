import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Button,
} from "@nextui-org/react";

export default function Project() {

    return (
        <>
      

            <div className="flex justify-center">
            
                <div className="max-w-[100%] gap-2 grid grid-cols-12 grid-rows-2 px-8">
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">
                                Project 1
                            </p>
                            <h4 className="text-white font-medium text-large">
                                CoinX
                            </h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-[100%] h-full object-cover cursor-pointer"
                            src="https://github.com/Harsh-BH/Build-the-New-Internet/raw/main/logo.png"
                            onClick={() => window.location.href = "https://wallet-connect-website-six.vercel.app"}
                        />

                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-black/60 uppercase font-bold">
                                Project 2
                            </p>
                            <h4 className="text-black font-medium text-large">
                                ScanX
                            </h4>
                        </CardHeader>

                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://github.com/Harsh-BH/ScanX/raw/main/1000194939_x16_fast.jpg"
                            onClick={() => window.location.href = "https://scan-x.vercel.app"}
                        />

                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">
                                Project 3
                            </p>
                            <h4 className="text-white font-medium text-large">
                                RideX
                            </h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F355f1ca988434fa8823e11fb39c18fa2%2Fprojects%2F48412d57dae34126930877aadb5779b0%2Fec1f9c94-15a1-4bf9-827c-4824083b1155.jpeg&w=1440&q=75"
                            onClick={() => window.location.href = "https://ride-x-flax.vercel.app"}
                        />
                    </Card>
                    <Card
                        isFooterBlurred
                        className="w-full h-[300px] col-span-12 sm:col-span-5"
                    >
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-black/60 uppercase font-bold">Startup Website</p>
                            <h4 className="text-black font-medium text-2xl">RenewHeat</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-[100%] h-[100%]  scale-10"

                            src="https://firebasestorage.googleapis.com/v0/b/renewheat-daf8e.appspot.com/o/RH.LOGO.FINAL.png?alt=media&token=33254e2d-5b91-45fb-a6ac-e47f1d90f325"
                            onClick={() => window.location.href = "https://renewheat.in"}
                        />

                    </Card>
                    <Card
                        isFooterBlurred
                        className="w-full h-[300px] col-span-12 sm:col-span-7"
                    >
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">
                                Project-4
                            </p>
                            <h4 className="text-white/90 font-medium text-xl">
                                PloreX
                            </h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Relaxing app background"
                            className="z-0 w-full h-full object-cover"
                            src="https://nextui.org/images/card-example-5.jpeg"
                            onClick={() => window.location.href = "https://pseudo-x.vercel.app"}
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                            <div className="flex flex-grow gap-2 items-center">
                                <Image
                                    alt="Breathing app icon"
                                    className="rounded-full w-10 h-11 bg-black"
                                    src="https://nextui.org/images/breathing-app-icon.jpeg"
                                />
                                <div className="flex flex-col">
                                    <p className="text-tiny text-white/60">Breathing App</p>
                                    <p className="text-tiny text-white/60">
                                        Get a good night's sleep.
                                    </p>
                                </div>
                            </div>
                            <Button radius="full" size="sm">
                                Get App
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <div className="max-w-[100%] gap-2 grid grid-cols-12 grid-rows-2 px-8">
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">
                                What to watch
                            </p>
                            <h4 className="text-white font-medium text-large">
                                Stream the Acme event
                            </h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://nextui.org/images/card-example-4.jpeg"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">
                                Plant a tree
                            </p>
                            <h4 className="text-white font-medium text-large">
                                Contribute to the planet
                            </h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://nextui.org/images/card-example-3.jpeg"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">
                                Supercharged
                            </p>
                            <h4 className="text-white font-medium text-large">
                                Creates beauty like a beast
                            </h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://nextui.org/images/card-example-2.jpeg"
                        />
                    </Card>
                    <Card
                        isFooterBlurred
                        className="w-full h-[300px] col-span-12 sm:col-span-5"
                    >
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                            src="https://nextui.org/images/card-example-6.jpeg"
                        />
                        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                            <div>
                                <p className="text-black text-tiny">Available soon.</p>
                                <p className="text-black text-tiny">Get notified.</p>
                            </div>
                            <Button
                                className="text-tiny"
                                color="primary"
                                radius="full"
                                size="sm"
                            >
                                Notify Me
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card
                        isFooterBlurred
                        className="w-full h-[300px] col-span-12 sm:col-span-7"
                    >
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">
                                Your day your way
                            </p>
                            <h4 className="text-white/90 font-medium text-xl">
                                Your checklist for better sleep
                            </h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Relaxing app background"
                            className="z-0 w-full h-full object-cover"
                            src="https://nextui.org/images/card-example-5.jpeg"
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                            <div className="flex flex-grow gap-2 items-center">
                                <Image
                                    alt="Breathing app icon"
                                    className="rounded-full w-10 h-11 bg-black"
                                    src="https://nextui.org/images/breathing-app-icon.jpeg"
                                />
                                <div className="flex flex-col">
                                    <p className="text-tiny text-white/60">Breathing App</p>
                                    <p className="text-tiny text-white/60">
                                        Get a good night's sleep.
                                    </p>
                                </div>
                            </div>
                            <Button radius="full" size="sm">
                                Get App
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )
};