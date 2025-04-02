import Image from "next/image"

export default function ExploreScreen() {
  return (
    <div className="flex h-full bg-[#0a192f]">
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <div className="space-y-4 max-w-lg">
          <h1 className="text-[#f4ce14] text-5xl font-bold">Explore New Content</h1>
          <p className="text-gray-400 text-xl">Discover stories, photos, and videos from people around the world</p>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2">
        <div className="grid grid-cols-1 h-full">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Travel destinations"
              width={600}
              height={600}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

