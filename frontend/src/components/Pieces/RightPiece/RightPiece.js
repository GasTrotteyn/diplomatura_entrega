import React from "react";
import classes from "./RigthPiece.module.css";
import Button from "../../UI/Button/Button";

const Piece = (props) => {
    const {
        flag,
        title,
        srcIcon,
        altIcon,
        paragraph1,
        paragraph2,
        paragraph3,
        paragraph4,
        paragraph5,
        btnMessage,
        path,
        srcPhoto,
        altPhoto,
        photoOnlyDesktop,
        noButton,
        buttonForVideo,
    } = props;

    const classesArray = [
        classes.photo,
        photoOnlyDesktop ? classes.photoOnlyDesktop : null,
    ].join(" ");

    return (
        <article className={classes.container}>
            <div className={classes.text}>
                <div className={classes.titleStrip}>
                    <div>
                        <h4 className={classes.flag}>{flag}</h4>
                        <h2 className={classes.title}>{title}</h2>
                    </div>
                    <img
                        className={classes.icon}
                        src={srcIcon}
                        alt={altIcon}
                    ></img>
                </div>
                <p className={classes.paragraph}>{paragraph1}</p>
                <p
                    className={[classes.paragraph, classes.paragraph2].join(
                        " "
                    )}
                >
                    {paragraph2}
                </p>
                {paragraph3 ? (
                    <p className={classes.paragraph}>{paragraph3}</p>
                ) : null}
                {paragraph4 ? (
                    <p className={classes.paragraph}>{paragraph4}</p>
                ) : null}
                {paragraph5 ? (
                    <p className={classes.paragraph}>{paragraph5}</p>
                ) : null}
                {noButton ? null : (
                    <Button path={path} forVideo={buttonForVideo}>
                        {btnMessage}
                    </Button>
                )}
            </div>

            {photoOnlyDesktop ? (
                <img
                    className={classesArray}
                    src={srcPhoto}
                    alt={altPhoto}
                ></img>
            ) : (
                <img
                    className={classes.photo}
                    src={srcPhoto}
                    alt={altPhoto}
                ></img>
            )}
        </article>
    );
};

export default Piece;
