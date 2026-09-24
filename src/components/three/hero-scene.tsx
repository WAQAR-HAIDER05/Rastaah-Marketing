import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";
import { COMMUNITY_PLOTS } from "@/data/catalog";

const GOLD = "#c4a574";
const STONE = "#d9cbb8";
const GROUND = "#2a241e";

function MiniCommunity({ pointer }: { pointer: { x: number; y: number } }) {
  const group = useRef<Group>(null);
  const plots = useMemo(
    () => COMMUNITY_PLOTS.filter((p) => p.gz < 2 && p.gx < 6),
    [],
  );

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    const d = Math.min(delta, 0.1);
    const targetY = 0.45 + pointer.x * 0.4;
    const targetX = 0.38 + pointer.y * 0.16;
    g.rotation.y += (targetY - g.rotation.y) * (1 - Math.exp(-d * 3));
    g.rotation.x += (targetX - g.rotation.x) * (1 - Math.exp(-d * 3));
    g.rotation.y += d * 0.12;
  });

  return (
    <group ref={group} position={[0, -0.35, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.08, 0]} receiveShadow>
        <circleGeometry args={[4.2, 48]} />
        <meshStandardMaterial color={GROUND} roughness={0.85} metalness={0.08} />
      </mesh>
      {plots.map((plot) => {
        const x = (plot.gx - 2.2) * 1.05;
        const z = (plot.gz - 0.5) * 1.25;
        const built = plot.status === "built";
        return (
          <group key={plot.id} position={[x, 0, z]}>
            <mesh>
              <boxGeometry args={[0.9, 0.1, 1.05]} />
              <meshStandardMaterial
                color={plot.status === "available" ? GOLD : "#8a7358"}
                metalness={0.5}
                roughness={0.35}
                emissive={plot.status === "available" ? GOLD : "#000000"}
                emissiveIntensity={plot.status === "available" ? 0.12 : 0}
              />
            </mesh>
            {built ? (
              <mesh position={[0, 0.42, 0]} castShadow>
                <boxGeometry args={[0.5, 0.75, 0.5]} />
                <meshStandardMaterial color={STONE} roughness={0.55} />
              </mesh>
            ) : null}
          </group>
        );
      })}
      <mesh position={[0, 0.02, 1.35]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6.4, 0.42]} />
        <meshStandardMaterial color="#1a1714" />
      </mesh>
      <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <planeGeometry args={[3.4, 0.18]} />
        <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.35} />
      </mesh>
    </group>
  );
}

export function HeroScene({ pointer }: { pointer: { x: number; y: number } }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 3.6, 6.4], fov: 35 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 8, 4]} intensity={1.7} color="#ffe2b0" castShadow />
      <directionalLight position={[-5, 2, -3]} intensity={0.35} color="#9bb4d0" />
      <MiniCommunity pointer={pointer} />
    </Canvas>
  );
}
