"use client";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { TProject } from "@/types/projectType";
import { useState } from "react";

export const ProjectCard = ({ data }: { data: TProject }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-card__back">
        <div className="project-card__back-content">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="project-card__back-arrow"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
          <h3 className="project-card__back-title">{data.projectName}</h3>
          <span className="project-card__back-subtitle">
            {data.workType} — {data.location}
          </span>
        </div>
      </div>

      <Link href={`/detail/project/${data._id}`}>
        <motion.div
          className="project-card__front"
          animate={{
            x: isHovered ? "65%" : "0%",
            rotateY: isHovered ? -8 : 0,
          }}
          transition={{
            duration: 0.45,
            ease: [0.4, 0, 0.2, 1],
          }}
        >

          <div className="project-card__image-wrapper">
            <Image
              src="/NAVA Logo.png"
              alt={data.projectName}
              fill
              className="project-card__image"
            />
            <div className="project-card__image-overlay" />
          </div>

          {/* Dark overlay top section */}
          <div className="project-card__content">
            {/* Top icon area */}
            <div className="project-card__icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>

            {/* Title and subtitle */}
            <div className="project-card__titles">
              <h3 className="project-card__name">{data.projectName}</h3>
              <span className="project-card__subtitle">
                {data.workType} — {data.location}
              </span>
            </div>

            {/* Description at bottom */}
            <p className="project-card__desc">{data.projectDesc}</p>

            {/* Utils tags */}
            <ul className="project-card__tags">
              {data.utils.slice(0, 4).map((i, idx) => (
                <li key={idx} className="project-card__tag">
                  {i}
                </li>
              ))}
            </ul>
          </div>

          {/* Diagonal accent line */}
          <div className="project-card__accent-line" />
        </motion.div>
      </Link>
    </div>
  );
};
