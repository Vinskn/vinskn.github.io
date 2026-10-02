import Image from 'next/image';
import SectionDivider from '@/component/pageAssets/SectionDivider';

export const AboutMe = () => {
  return (
    <section className="lg:snap-center lg:px-20 sm:px-10 xs:px-5 min-h-screen flex flex-col justify-center py-16">
      {/* Header */}
      <div className="mb-8">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-mainAccent/10 text-mainAccent text-sm font-medium tracking-wide mb-4">
          Who I Am
        </span>
        <h2 className="text-textMain font-bold lg:text-5xl sm:text-4xl xs:text-3xl leading-tight tracking-tight">
          Hi <span className="text-mainAccent">There...</span>
        </h2>
        <SectionDivider />
      </div>

      {/* Content */}
      <div className="flex lg:flex-row flex-col lg:gap-12 gap-8 items-stretch">
        {/* Photo */}
        <div className="lg:w-[45%] xs:w-full">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/myPict.jpg"
              fill
              alt="Sinamo Kevin Nathanael — Software Engineer"
              className="object-cover"
              priority
            />
          </div>

          {/* Quick stats bar */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="text-center py-3 rounded-xl bg-mainAccent/5 border border-mainAccent/10">
              <p className="text-lg font-bold text-mainAccent leading-none">Frontend</p>
              <p className="text-[11px] text-textSec mt-1">Primary Focus</p>
            </div>
            <div className="text-center py-3 rounded-xl bg-mainAccent/5 border border-mainAccent/10">
              <p className="text-lg font-bold text-mainAccent leading-none">AI/ML</p>
              <p className="text-[11px] text-textSec mt-1">Growing Interest</p>
            </div>
            <div className="text-center py-3 rounded-xl bg-mainAccent/5 border border-mainAccent/10">
              <p className="text-lg font-bold text-mainAccent leading-none">Full Stack</p>
              <p className="text-[11px] text-textSec mt-1">Expanding Into</p>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="lg:w-[55%] xs:w-full flex flex-col gap-4">
          <p className="text-textMain text-justify leading-relaxed">
            My name is <strong>Sinamo Kevin Nathanael</strong>. I&apos;m a{' '}
            <strong>Software Engineering graduate</strong> with a passion for
            crafting user-friendly digital experiences. My main expertise lies
            in <strong>frontend web development</strong>, where I focus on
            building clean, responsive, and interactive interfaces.
          </p>
          <p className="text-textMain text-justify leading-relaxed">
            Beyond the web, I&apos;m also capable of building{' '}
            <strong>mobile and desktop applications</strong>, especially for
            projects that are not overly complex.
          </p>
          <p className="text-textMain text-justify leading-relaxed">
            I have a growing interest in{' '}
            <strong>Artificial Intelligence and Machine Learning</strong>, and
            I&apos;m currently deepening my skills in those areas. I enjoy
            exploring new technologies and constantly challenging myself to stay
            up to date in the ever-evolving tech landscape.
          </p>
          <p className="text-textMain text-justify leading-relaxed">
            Whether I&apos;m building a website, creating an app, or learning
            about neural networks, I bring the <strong>same level of</strong>{' '}
            curiosity, discipline, and drive to everything I do.
          </p>
        </div>
      </div>
    </section>
  );
};
