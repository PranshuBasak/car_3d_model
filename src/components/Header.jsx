import { Html } from '@react-three/drei'

const Header = ({pos , comment}) => {
    return (
        <Html position={pos} top>
            <div className='flex justify-center items-center w-96 text-2xl font-semibold text-slate-900'>
                {comment}
            </div>
          </Html>
      )
}

export default Header