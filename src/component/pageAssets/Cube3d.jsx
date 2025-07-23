"use client"

import { useAnimationFrame } from "motion/react"
import { useRef } from "react"

export default function UseAnimationFrame() {
  const ref = useRef<HTMLDivElement>(null)

  useAnimationFrame((t) => {
    if (!ref.current) return

    const rotate = Math.sin(t / 10000) * 200
    const y = (1 + Math.sin(t / 1000)) * -50
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
  })

  return (
    <div className="w-[200px] h-[200px] perspective-800">
      <div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        ref={ref}
      >
        <div className="side bg-red-500/60" style={{ transform: "rotateY(0deg) translateZ(100px)" }} />
        <div className="side bg-orange-500/60" style={{ transform: "rotateY(90deg) translateZ(100px)" }} />
        <div className="side bg-yellow-500/60" style={{ transform: "rotateY(180deg) translateZ(100px)" }} />
        <div className="side bg-green-500/60" style={{ transform: "rotateY(-90deg) translateZ(100px)" }} />
        <div className="side bg-blue-500/60" style={{ transform: "rotateX(90deg) translateZ(100px)" }} />
        <div className="side bg-purple-500/60" style={{ transform: "rotateX(-90deg) translateZ(100px)" }} />
      </div>
    </div>
  )
}
