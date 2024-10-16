import Centralizer from "../Centralizer/Centralizer";
import Body from "../Typography/Body";
import Headline from "../Typography/Headline";
import "./UpdateSection.css";
import UpdateSectionBox, { UpdateSectionBoxParams } from "./UpdateSectionBox";
import { useEffect, useState } from "react";

async function getServerData(): Promise<UpdateSectionBoxParams[]> {
  const result = await fetch("http://localhost:5899/update-section", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  });

  const finalData = (await result.json()) as UpdateSectionBoxParams[];

  return finalData;
}

function UpdateSection() {
  const [localSectionItems, setLocalSectionItems] = useState<
    UpdateSectionBoxParams[]
  >([]);

  async function loadLocalSectionItems() {
    const temp = await getServerData();

    setLocalSectionItems(temp);
  }

  useEffect(() => {
    loadLocalSectionItems();
  }, []);

  return (
    <div className="UpdateSection">
      <Centralizer>
        <div className="flex-grid">
          <div className="grid-text">
            <Headline size="h2" color="grey">
              Caring is the new marketing
            </Headline>
            <Body size="body2" color="grey" weight="regular">
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.
            </Body>
          </div>
          <div className="community-update">
            {localSectionItems.map((item) => {
              return <UpdateSectionBox title={item.title} image={item.image} />;
            })}
          </div>
        </div>
      </Centralizer>
    </div>
  );
}

export default UpdateSection;
