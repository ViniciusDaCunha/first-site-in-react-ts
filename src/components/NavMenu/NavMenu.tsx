export default function NavMenu() {
  return (
    <div
      className="NavMenu"
      style={{
        display: "flex",
        gap: 0,
        alignItems: "center",
        justifyContent: "space-evenly",
        background: "grey",
      }}
    >
      <div>logo</div>
      <div>
        <div>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
        </div>
      </div>
      <div>
        <div>
          <button>1</button>
          <button>2</button>
        </div>
      </div>
    </div>
  );
}
