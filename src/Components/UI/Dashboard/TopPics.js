import React, { useState } from "react";
import { Tooltip } from "reactstrap";

const TopPics = ({ image }) => {
  const [hoverOn, setHover] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setHover(true);
  const toggleOff = () => setHover(false);

  const handleShowDialog = () => {
    setOpen(!isOpen);
  };

  const styles = {
    header: {
      backgroundImage: `url(${image.url})`,
      width: "33.333333vw",
      height: 200,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },

    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    seperate: {
      borderWidth: 1,
      marginTop: 3,
    },
    dialog: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "90vh",
      position: "absolute",
    },
    fullImage: {
      maxWidth: "100%",
      maxHeight: "100%",
    },
  };

  return (
    <div>
      <div
        style={styles.header}
        onMouseOver={toggle}
        onMouseLeave={toggleOff}
        onClick={handleShowDialog}
      >
        {hoverOn && (
          <div center={12} style={styles.content}>
            <small style={{ color: "white" }}>{image.locationName}</small>
            <hr style={styles.seperate} />
            <small style={{ color: "white" }}>{image.userName}</small>
          </div>
        )}
      </div>
      {isOpen && (
        <dialog
          className="dialog"
          style={styles.dialog}
          open
          onClick={handleShowDialog}
          onMouseLeave={handleShowDialog}
        >
          <img
            className="image"
            src={image.url}
            onClick={handleShowDialog}
            style={styles.fullImage}
            alt="no image"
          />
        </dialog>
      )}
    </div>
  );
};

export default TopPics;

// {image.url}
