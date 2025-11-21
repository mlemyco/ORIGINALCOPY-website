import "./Slideshow.scss";

const Slideshow = ({
  elements,
  height,
}: {
  elements: string[];
  height: number;
}) => {
  return (
    <div
      className="overflow-x-hidden relative mb-10"
      style={{ height: `${height}px` }}
    >
      <div className="slideshow flex justify-center gap-10">
        {/* Render the list twice to make it look infinite */}
        {elements.map((element, index) => {
          return <img key={index} src={element} alt="" />;
        })}

        {/* {elements.map((element) => {
          return <img src={element} alt="" />;
        })} */}
      </div>
    </div>
  );
};

export default Slideshow;
