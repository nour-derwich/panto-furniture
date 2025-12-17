import ArrowButton from "@/app/components/ui/ArrowButton";
import { materials } from "@/data/material"; 

const Materials = () => {
  const largeMaterial = materials.find((material) => material.isLarge);
  const smallMaterials = materials.filter((material) => !material.isLarge);

  return (
    <section id="materials" className="my-24 section-container">
      <div className="flex flex-col md:flex-row items-center justify-between md:gap-20 gap-12">
        {/* Content Section - Left side */}
        <div className="md:w-1/2 w-full">
          <div className="max-w-xl mx-auto md:mx-0">
            <h3 className="text-lg Gilroy-SemiBold text-[#E58411] mb-4">
              Materials
            </h3>
            <h2 className="text-3xl gilroy-bold md:text-4xl font-bold mb-6 capitalize">
              Very serious materials for making furniture
            </h2>
            <p className="Gilroy-Regular text-lg mb-8 leading-relaxed">
              Because panto was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              relatively low price
            </p>
            <ArrowButton>More Info</ArrowButton>
          </div>
        </div>

        {/* Images Grid - Right side with 3-column layout */}
        <div className="md:w-1/2 w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {/* First column: material1 and material2 stacked vertically */}
            <div className="space-y-4 md:space-y-6">
              <div className="relative h-48 md:h-56 lg:h-64">
                <img
                  src={materials[0].image}
                  alt={materials[0].alt}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="relative h-48 md:h-56 lg:h-64">
                <img
                  src={materials[1].image}
                  alt={materials[1].alt}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Second and third columns: material3 as large image */}
            <div className="col-span-1 md:col-span-2">
              <div className="relative h-64 md:h-[500px] lg:h-[547px]">
                <img
                  src={materials[2].image}
                  alt={materials[2].alt}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
