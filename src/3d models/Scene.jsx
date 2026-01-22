import { Canvas } from '@react-three/fiber'
import Model from './Model'

const Scene = () => {

  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
    <Canvas>
      <ambientLight intensity={0.09} />
      <perspectiveCamera />
      <Model />
    </Canvas>
    </div>
  )
}

export default Scene