import Footer from "@/component/shared/Footer";
import { IconArrowLeft, IconOpenLink } from "@intentui/icons";
import Link from "next/link";
import { getAllProject } from "@/lib/helper/getAllProject";

export default async function ArchiveProject() {
  const projectList = await getAllProject();

  return (
    <div className="lg:px-20 sm:px-10 px-5 py-20">
      {/* Back button */}
      <Link
        href="/detail/project"
        className="inline-flex items-center gap-2 text-textSec hover:text-mainAccent transition-colors duration-200 mb-6 group"
      >
        <IconArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
        <span className="text-sm font-medium">Back to Projects</span>
      </Link>

      {/* Header */}
      <h1 className="text-textMain font-bold lg:text-5xl sm:text-4xl xs:text-3xl leading-tight tracking-tight">
        Projects <span className="text-mainAccent">Archive</span>
      </h1>
      <p className="mt-2 text-textSec lg:text-lg xs:text-base mb-8">
        A complete list of all my projects
      </p>

      <div>
        <table className="table-auto w-full text-center border-spacing-10">
          <colgroup>
            <col className="w-1/10" />
            <col className="w-2/10" />
            <col className="w-4/10" />
            <col className="w-1/10" />
            <col className="w-1/10" />
          </colgroup>
          <thead className="border-b-2 border-mainAccent/20">
            <tr>
              <th className="py-3 text-mainAccent text-sm font-semibold tracking-wide">Year</th>
              <th className="py-3 text-mainAccent text-sm font-semibold tracking-wide">Title</th>
              <th className="py-3 text-mainAccent text-sm font-semibold tracking-wide">Technology</th>
              <th className="py-3 text-mainAccent text-sm font-semibold tracking-wide">Type</th>
              <th className="py-3 text-mainAccent text-sm font-semibold tracking-wide">Link</th>
            </tr>
          </thead>
          <tbody>
            {projectList?.map((data, idx) => (
              <tr key={idx} className="border-b border-bgSoft hover:bg-mainAccent/3 transition-colors duration-150">
                <td className="py-2 px-1 lg:text-base xs:text-sm">
                  {data.date.split("-")[0]}
                </td>
                <td className="py-2 px-1 lg:text-base xs:text-sm font-medium">
                  <Link href={`/detail/project/${data._id}`} className="hover:text-mainAccent transition-colors duration-200">
                    {data.projectName}
                  </Link>
                </td>
                <td className="py-2 px-1 lg:text-base xs:text-sm">
                  {data.utils.join(", ")}
                </td>
                <td className="py-2 px-1 lg:text-base xs:text-sm underline-offset-3 hover:underline select-none cursor-pointer">
                  {data.type}
                </td>
                <td className="text-center align-middle py-2 px-1 lg:text-base xs:text-sm">
                  <Link href={`/detail/project/${data._id}`} className="inline-flex items-center justify-center text-textSec hover:text-mainAccent transition-colors duration-200">
                    <IconOpenLink className="w-4 h-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
