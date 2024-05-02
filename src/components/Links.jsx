import { Html } from "@react-three/drei"


const Links = ({pos , comment}) => {
  return (
    <Html position={pos} top>
        <div className='flex justify-center items-center'>
            <button className="inline-flex  h-6 md:h-10 lg:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <a href="/about" > 
                    {comment}
                </a>
            </button>
        </div>
      </Html>
  )
}


// (220.55deg, #8A88FB, 0%, #D079EE 100%)
export default Links