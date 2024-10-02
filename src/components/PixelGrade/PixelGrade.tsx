import PixelGradeFooter from "./PixelGradeFooter";
import pixelGradeFooterImage from "../../assets/pixel-grade-image.svg";

function PixelGrade() {
  const titleText = "The unseen of spreading three years at Pixelgrade";
  const descriptionText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit \
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla. \
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis \
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. \
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec \
              elementum pulvinar odio.";

  return (
    <div className="PixelGrade">
      <PixelGradeFooter
        title={titleText}
        description={descriptionText}
        image={pixelGradeFooterImage}
      />
    </div>
  );
}

export default PixelGrade;
