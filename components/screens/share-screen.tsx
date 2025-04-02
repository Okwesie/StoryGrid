import Image from "next/image"

export default function ShareScreen() {
  return (
    <div className="flex h-full bg-[#0a192f]">
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <div className="space-y-4 max-w-lg">
          <h1 className="text-[#f4ce14] text-5xl font-bold">Share Your Stories</h1>
          <p className="text-gray-400 text-xl">
            Post photos, videos, and updates to share your life with friends and followers
          </p>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2">
        <div className="grid grid-cols-2 grid-rows-2 h-full">
          <div className="relative col-span-1 row-span-1">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Stack of books"
              width={300}
              height={300}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="relative col-span-1 row-span-2">
            <Image
              src="/placeholder.svg?height=600&width=300"
              alt="Elderly man looking out window"
              width={300}
              height={600}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="relative col-span-1 row-span-1">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Woman reading in garden"
              width={300}
              height={300}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

