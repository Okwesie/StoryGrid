import Image from "next/image"
import Link from "next/link"

export default function ConnectScreen() {
  return (
    <div className="flex h-full bg-[#0a192f]">
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <div className="space-y-6 max-w-lg">
          <h1 className="text-[#f4ce14] text-5xl font-bold">Connect with Friends</h1>
          <p className="text-gray-400 text-xl">Follow your friends, send messages and stay connected in real-time</p>

          <div className="pt-6">
            <Link href="#" className="inline-block bg-[#f4ce14] text-[#0a192f] font-bold py-3 px-8 rounded-md text-lg">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2">
        <div className="grid grid-cols-2 grid-rows-2 h-full">
          <div className="relative col-span-1 row-span-1">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Friends at sunset"
              width={300}
              height={300}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="relative col-span-1 row-span-1">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Group photo"
              width={300}
              height={300}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="relative col-span-2 row-span-1">
            <Image
              src="/placeholder.svg?height=300&width=600"
              alt="Friends outdoors"
              width={600}
              height={300}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

