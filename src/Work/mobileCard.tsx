function MobileCard({ src }: { src: string }) {
  return (
    <div
      className="mobileCardContainer"
      style={{
        width: "100%",
        display: "flex",
        //alignItems: "center",
        //justifyContent: "center",
        padding: "0",
      }}
    >
      <div
        className="cardMotion"
        style={{
          borderRadius: "25px",
          position: "absolute",
          transform: "rotate(-90deg)",
          maxWidth: "100%",
        }}
      >
        <div className="insideOfCard">
          <div
            className="insideOfCardImg"
            style={{
              backgroundImage: `URL(${src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
export default MobileCard;
