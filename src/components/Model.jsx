
import { Html, OrbitControls } from '@react-three/drei';
import { useState, Suspense, useEffect, useRef,  } from 'react';
import { Canvas, } from '@react-three/fiber';
import { PerformanceMonitor, AccumulativeShadows, RandomizedLight, Environment } from '@react-three/drei';
import { Loader } from './Loader';
import { Lightformers, Porsche } from './PorcheModel';
import Links from './Links';
import { Navbar } from './Navbar';
import start from '../assets/start.svg'
import stop from '../assets/stop.svg'
import music from '../assets/music.mp3'





export function Model() {

  const audioRef = useRef(new Audio(music));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [degraded, degrade] = useState(false);
  const [isplaying, setisplaying] = useState(false)
  // State to store the dynamic fov value
  const [fov, setFov] = useState(40);

  // Function to calculate and update fov based on window width
  const updateFov = () => {
    const width = window.innerWidth;
    // Adjust fov based on window width
    let newFov;
    if (width >= 1024) {
      newFov = 20;
    } else if (width < 1024 && width > 450) {
      newFov = 30;
    } else {
      newFov = 40;
    }
    setFov(newFov);
  };

  // Effect hook to update fov on mount and when window resizes
  useEffect(() => {
    updateFov();
    window.addEventListener('resize', updateFov);
    return () => window.removeEventListener('resize', updateFov);
  }, []);

  //Audio playback
  useEffect(() =>{
    if(isplaying){
      audioRef.current.play();
    }

    return () =>{
      audioRef.current.pause();
    }
  }, [isplaying])


  return (
    <>
        <section className='w-full h-screen relative'>
          
        <div className={` "flex" : "hidden" absolute bottom-0 left-0 w-12 md:w-22 h-12 md:h-22 justify-center items-center z-20 p-2 cursor-pointer`} onClick={() => setisplaying(!isplaying)}>
          {
            !isplaying? 
            <img src={start} alt="start" />:
            <img src={stop} alt="stop" />
          }
        </div>
        <div className="absolute z-10 flex items-center justify-center">
          <Navbar />
        </div>
      <Canvas shadows camera={{ position: [-2, 3, 15], fov: fov }} className='bg-black absolute z-0' >
          <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
          <ambientLight intensity={0.5} />
          <Suspense  fallback={<Loader />}>

            <Links  pos={[0, 2.5, -2]} comment="About"/>
            {/* <Links  pos={[1.5, 1, -2.5]} comment="Travel"/> */}
            <Links  pos={[-2, 2.5, 1]} comment="Project"/>
            <Links  pos={[-2.7, 1.5, 2]} comment="Experience"/>
            <Porsche scale={1.6} position={[-0.5, -0.18, 0]} rotation={[0, Math.PI / 5, 0]}/>
            <AccumulativeShadows position={[0, -1.16, 0]} frames={100} alphaTest={0.9} scale={10}>
              <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
            </AccumulativeShadows>
            <PerformanceMonitor onDecline={() => degrade(true)} />
            <Environment frames={degraded ? 1 : Infinity} resolution={256} background blur={1}>
              <Lightformers />
            </Environment>
          </Suspense>
          {/* <CameraRig /> */}
          <OrbitControls
            enableZoom={true}
            zoomSpeed={0.6}
            enableRotate={true}
            rotateSpeed={0.7}
            enablePan={true}
            panSpeed={0.5}
            minDistance={1}
            maxDistance={100}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            enableDamping={true}
            dampingFactor={0.1}
          />
          
        </Canvas>
      
    </section>
    </>
  );
}
