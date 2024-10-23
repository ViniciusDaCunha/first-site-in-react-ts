import Centralizer from "../Centralizer/Centralizer";
import Body from "../Typography/Body";
import Headline from "../Typography/Headline";
import "./ClientsSection.css";
import { useEffect, useState } from "react";
import ClientsLogo, { ClientsLogoParams } from "./ClientsLogo";

async function getServerData(): Promise<ClientsLogoParams[]> {
  const result = await fetch("http://localhost:5899/clients-logo", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  });
  const finalData = (await result.json()) as ClientsLogoParams[];
  return finalData;
}

export default function ClientsSection() {
  const [clientsLogo, setClientsLogo] = useState<ClientsLogoParams[]>([]);

  async function loadClientsLogo() {
    const temp = await getServerData();

    setClientsLogo(temp);
  }

  useEffect(() => {
    loadClientsLogo();
  }, []);

  return (
    <div className="ClientsSection">
      <Centralizer>
        <div className="flex-grid">
          <div className="clients-text">
            <Headline size="h2" color="grey">
              Our Clients
            </Headline>
            <Body size="body2" weight="regular" color="grey">
              We have been working with some Fortune 500+ clients
            </Body>
          </div>
          <div className="clients-logo">
            {clientsLogo.map((logo) => {
              return <ClientsLogo image={logo.image} />;
            })}
          </div>
        </div>
      </Centralizer>
    </div>
  );
}
