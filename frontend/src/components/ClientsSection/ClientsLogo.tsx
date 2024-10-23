export type ClientsLogoParams = {
  image: string;
};

function ClientsLogo({ image = "" }: ClientsLogoParams) {
  return (
    <div className="logo">
      <img src={image} alt="Clients logo" title="Clients logo" />
    </div>
  );
}

export default ClientsLogo;
