import ButtonCustom from "../ButtonCustom/ButtonCustom";
import Headline from "../Typography/Headline";
import "./UpdateSectionBox.css";

type UpdateSectionBoxParams = {
  title: string;
  image: string;
};

function UpdateSectionBox({ title = "", image = "" }: UpdateSectionBoxParams) {
  return (
    <div className="update-box">
      <div className="box-img">
        <img src={image} alt="Updata box image" title="Update box image" />
      </div>
      <div className="box-content">
        <Headline size="h4" color="grey">
          {title}
        </Headline>
        <div className="button-update">
          <ButtonCustom appearence="tertiary" size="small" title="Readmore">
            Readmore
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
}

export default UpdateSectionBox;
