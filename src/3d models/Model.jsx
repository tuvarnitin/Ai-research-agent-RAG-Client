import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { MeshBasicMaterial } from "three";

export default function Model(props) {
    const { nodes, materials, scene } = useGLTF("/brain.glb");
    useEffect(() => {
        scene.traverse((obj) => {
            if (obj.isMesh && obj.material) {
                obj.material.wireframe = true;
            }
        });
    }, [scene])

    useFrame(()=>{
        scene.rotation.y -= 0.002
    })
    const {viewport} = useThree()

    return (
        <primitive
            object={scene}
            scale={Math.max(viewport.width / 3.8,2.2)}
            position={[0, -viewport.width /7, 0]}
            {...props}
        />
    );
}

useGLTF.preload("/models/scene.glb");