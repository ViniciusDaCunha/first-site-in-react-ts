import { useEffect, useState } from "react";
import Centralizer from "../Centralizer/Centralizer";
import Body from "../Typography/Body";
import Headline from "../Typography/Headline";
import "./CommunitySection.css";
import CommunitySectionBox, {
  CommunitySectionBoxParams,
} from "./CommunitySectionBox";

async function getServerData(): Promise<CommunitySectionBoxParams[]> {
  const result = await fetch("http://localhost:5899/community-box", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  });

  const finalData = (await result.json()) as CommunitySectionBoxParams[];
  return finalData;
}

export default function CommunitySection() {
  const [boxSectionItems, setBoxSectionsItems] = useState<
    CommunitySectionBoxParams[]
  >([]);

  async function loadBoxSectionsItems() {
    const temp = await getServerData();

    setBoxSectionsItems(temp);
  }

  useEffect(() => {
    loadBoxSectionsItems();
  }, []);

  return (
    <div className="CommunitySection">
      <Centralizer>
        <div className="flex-grid">
          <div className="community-text">
            <Headline size="h2" color="grey">
              Manage your entire community
            </Headline>
            <Headline size="h2" color="grey">
              in a single system
            </Headline>
            <Body size="body2" weight="regular" color="grey">
              Who is Nextcent suitable for?
            </Body>
          </div>
          <div className="community-network">
            {boxSectionItems.map((item) => {
              return (
                <CommunitySectionBox
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
      </Centralizer>
    </div>
  );
}
