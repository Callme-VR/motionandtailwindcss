import Containers from "@/components/containers"

export default function Homepage() {
  return (
    <div className="min-h-screen flex items-start justify-center">
      <Containers className="min-h-screen p-4 md:p-10 ">
        <h1 className="text-2xl font-bold
        tracking tracking-tight md:text-4xl text-primary">
          hello.vishal
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
          i'am a software developer with 4 year expreinces of building the Scable Application with more precius information
        </p>
      </Containers>
    </div>
  );
}