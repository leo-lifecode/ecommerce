import BlinkStar from "../../../assets/svg/blink-star.svg";
import Homepage from "../../../assets/images/homepage.png";
import ImageComponent from "../../../components/ImageComponent";

const ImageHome = () => {
  return (
    <div className="relative h-full w-full">
      <ImageComponent
        src={Homepage}
        style="bg-cover bg-center bg-fixed absolute"
      />
      <ImageComponent src={BlinkStar} style="absolute z-30 right-0" />
      <ImageComponent src={BlinkStar} style="absolute z-30 left-0 top-1/3 " />
    </div>
  );
};

export default ImageHome;
