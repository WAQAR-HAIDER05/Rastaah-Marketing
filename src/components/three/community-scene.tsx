import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import type { InstancedMesh } from "three";
import { Object3D } from "three";
import { COMMUNITY_PLOTS, type CommunityPlot } from "@/data/catalog";

const GOLD = "#c4a574";
const INK = "#12100e";
const ROAD = "#2b2723";
const MOSS = "#4e5b48";

function gridToWorld(gx: number, gz: number) {
  const x = (gx - 3.5) * 1.7;
  const z = (gz - 2) * 2.1;
  return { x, z };
}

function PlotMesh({
  plot,
  selected,
  onHover,
  onSelect,
}: {
  plot: CommunityPlot;
  selected: boolean;
  onHover: (plot: CommunityPlot | null) => void;
  onSelect: (plot: CommunityPlot) => void;
}) {
  const { x, z } = gridToWorld(plot.gx, plot.gz);
  const color =
    plot.status === "available" ? GOLD : plot.status === "reserved" ? "#8d7758" : "#3d3832";
  const height = selected ? 0.16 : 0.08;

  return (
    <group position={[x, 0, z]}>
      <mesh
        position={[0, height / 2, 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
          onHover(plot);
        }}
        onPointerOut={() => {
          document.body.style.cursor = "";
          onHover(null);
        }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(plot);
        }}
      >
        <boxGeometry args={[1.4, height, 1.7]} />
        <meshStandardMaterial
          color={color}
          metalness={plot.status === "available" ? 0.45 : 0.15}
          roughness={0.4}
          emissive={selected ? GOLD : "#000000"}
          emissiveIntensity={selected ? 0.18 : 0}
        />
      </mesh>
      {plot.status === "built" ? (
        <mesh position={[0, 0.55, 0]} castShadow>
          <boxGeometry args={[0.7, 1, 0.7]} />
          <meshStandardMaterial color="#d5c6b2" roughness={0.55} />
        </mesh>
      ) : null}
      {plot.type === "Commercial" && plot.status === "built" ? (
        <mesh position={[0, 0.85, 0]} castShadow>
          <boxGeometry args={[0.85, 1.6, 0.85]} />
          <meshStandardMaterial color="#cfc3b3" roughness={0.5} metalness={0.1} />
        </mesh>
      ) : null}
    </group>
  );
}

function Trees() {
  const mesh = useRef<InstancedMesh>(null);
  const spots = useMemo(() => {
    const s: Array<[number, number]> = [];
    for (let i = -8; i <= 8; i += 2) {
      s.push([i * 0.9, -2.15]);
      s.push([i * 0.9, 2.2]);
    }
    return s;
  }, []);

  useLayoutEffect(() => {
    const inst = mesh.current;
    if (!inst) return;
    const dummy = new Object3D();
    spots.forEach((spot, i) => {
      dummy.position.set(spot[0], 0.55, spot[1]);
      dummy.scale.setScalar(0.7 + (i % 3) * 0.12);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
    });
    inst.instanceMatrix.needsUpdate = true;
  }, [spots]);

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, spots.length]}>
      <coneGeometry args={[0.28, 1.1, 6]} />
      <meshStandardMaterial color={MOSS} roughness={0.8} />
    </instancedMesh>
  );
}

function SceneContent({
  selectedId,
  onSelect,
}: {
  selectedId: string;
  onSelect: (plot: CommunityPlot) => void;
}) {
  const [hovered, setHovered] = useState<CommunityPlot | null>(null);
  const selected = COMMUNITY_PLOTS.find((p) => p.id === selectedId) ?? COMMUNITY_PLOTS[1];
  const hoverWorld = hovered ? gridToWorld(hovered.gx, hovered.gz) : null;

  return (
    <>
      <color attach="background" args={["#0c0b0a"]} />
      <fog attach="fog" args={["#0c0b0a", 18, 42]} />
      <hemisphereLight args={["#f0e6d4", "#2a241c", 0.55]} />
      <directionalLight
        position={[10, 14, 8]}
        intensity={1.35}
        color="#ffd7a8"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.04, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color={INK} roughness={1} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0.05]}>
        <planeGeometry args={[16, 1.15]} />
        <meshStandardMaterial color={ROAD} roughness={0.85} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[-0.15, 0.012, 0]}>
        <planeGeometry args={[12, 1.05]} />
        <meshStandardMaterial color={ROAD} roughness={0.85} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <ringGeometry args={[1.1, 1.55, 32]} />
        <meshStandardMaterial color={MOSS} roughness={0.9} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 0]}>
        <circleGeometry args={[1.05, 24]} />
        <meshStandardMaterial color="#3e4a39" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0.18]} position={[-1.4, 0.05, 0]}>
        <planeGeometry args={[12, 0.08]} />
        <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.25} />
      </mesh>
      {COMMUNITY_PLOTS.map((plot) => (
        <PlotMesh
          key={plot.id}
          plot={plot}
          selected={plot.id === selected.id}
          onHover={setHovered}
          onSelect={onSelect}
        />
      ))}
      <Trees />
      {hoverWorld && hovered ? (
        <Html position={[hoverWorld.x, 1.35, hoverWorld.z]} center distanceFactor={14}>
          <div className="pointer-events-none min-w-36 rounded-lg border border-gold/35 bg-ink/92 px-4 py-3 text-left shadow-lift">
            <p className="font-display text-lg text-paper">{hovered.label}</p>
            <p className="text-xs uppercase tracking-luxury text-gold">{hovered.type}</p>
            <p className="mt-1 text-xs capitalize text-paper/70">{hovered.status}</p>
          </div>
        </Html>
      ) : null}
      <OrbitControls
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        minDistance={10}
        maxDistance={26}
        minPolarAngle={0.55}
        maxPolarAngle={1.15}
        autoRotate
        autoRotateSpeed={0.35}
        target={[0, 0, 0]}
      />
    </>
  );
}

export function CommunityScene({
  selectedId,
  onSelect,
}: {
  selectedId: string;
  onSelect: (plot: CommunityPlot) => void;
}) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [11, 10, 13], fov: 40 }}
      gl={{ antialias: true }}
    >
      <SceneContent selectedId={selectedId} onSelect={onSelect} />
    </Canvas>
  );
}
