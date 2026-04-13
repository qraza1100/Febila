import imgHowItWorksImage32 from "figma:asset/e579b3132c5f96298f03c69a0276b327dcd9a665.png";
import imgHowItWorksImage30 from "figma:asset/291a425613dbec6b91fd3e30bf865a99453fadc5.png";
import imgHowItWorksImage28 from "figma:asset/fa8e4317b372b8a0d23f458db771912abebb7f33.png";
import imgHowItWorksImage26 from "figma:asset/60d77579cacdcd3c403039949afb73e49b6d0083.png";
import imgHowItWorksImage1 from "figma:asset/d80f63ff5b975c5e58e4973b9f5773fa77bcf3ac.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute left-0 size-[1024px] top-0" data-name="How-it-works-image-32">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHowItWorksImage32} />
      </div>
      <div className="absolute left-0 size-[1024px] top-[1064px]" data-name="How-it-works-image-30">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHowItWorksImage30} />
      </div>
      <div className="absolute left-[1064px] size-[1024px] top-[1064px]" data-name="How-it-works-image-28">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHowItWorksImage28} />
      </div>
      <div className="absolute left-[2128px] size-[1024px] top-[1064px]" data-name="How-it-works-image-26">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHowItWorksImage26} />
      </div>
      <div className="absolute left-[1104px] size-[1024px] top-0" data-name="How-it-works-image-1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHowItWorksImage1} />
      </div>
    </div>
  );
}