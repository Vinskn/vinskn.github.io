"use client";
import { motion } from "motion/react";
import SectionDivider from "../../pageAssets/SectionDivider";
import { useRef } from "react";
import { TProject } from "@/types/projectType";
import { ProjectCard } from "../../shared/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

export const ExperienceSection = ({
  projectList,
}: {
  projectList: TProject[];
}) => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <section className="exp-section lg:px-15 sm:px-8 xs:px-5 my-15">
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h2 className="lg:text-3xl xs:text-2xl font-bold">
          Profesional Experience
        </h2>
        <SectionDivider />
      </motion.div>

      <div className="carousel-wrapper">
        {/* Left arrow */}
        <button
          className="carousel-nav carousel-nav--prev"
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          aria-label="Previous project"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <Swiper
          ref={swiperRef}
          modules={[EffectCoverflow, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={projectList?.length > 3}
          loopAdditionalSlides={2}
          coverflowEffect={{
            rotate: 45,
            stretch: 0,
            depth: 250,
            modifier: 1,
            scale: 0.7,
            slideShadows: false,
          }}
          speed={600}
          className="project-swiper"
        >
          {projectList?.map((data, idx) => (
            <SwiperSlide key={data._id || idx} className="project-slide">
              <ProjectCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right arrow */}
        <button
          className="carousel-nav carousel-nav--next"
          onClick={() => swiperRef.current?.swiper.slideNext()}
          aria-label="Next project"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
};
