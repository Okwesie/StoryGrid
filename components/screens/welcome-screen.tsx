import Image from "next/image"

export default function WelcomeScreen() {
  return (
    <div className="flex h-full bg-[#0a192f]">
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <div className="space-y-4 max-w-lg">
          <h1 className="text-[#f4ce14] text-5xl font-bold">Welcome to StoryGrid</h1>
          <p className="text-gray-400 text-xl">
            Your new social media platform for sharing stories, connecting, and exploring.
          </p>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2">
        <div className="grid grid-cols-2 h-full">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Friends taking selfie"
              width={400}
              height={600}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="grid grid-rows-2 h-full">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Friends enjoying view"
                width={400}
                height={300}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Friends outdoors"
                width={400}
                height={300}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

