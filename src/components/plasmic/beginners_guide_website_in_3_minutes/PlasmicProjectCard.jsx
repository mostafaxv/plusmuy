// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: caUYrhr8rervwyBP2Z2CDy
// Component: asxHka0126CP
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  renderPlasmicSlot
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariantsoYDgg1BYrMw } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o_YDgg1BYrMW/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: caUYrhr8rervwyBP2Z2CDy/projectcss
import sty from "./PlasmicProjectCard.module.css"; // plasmic-import: asxHka0126CP/css
import wallpaperjpg7PDc5Y3QE8R from "./images/wallpaperjpg.jpg"; // plasmic-import: 7PDc5Y3q_E8r/picture

createPlasmicElementProxy;

export const PlasmicProjectCard__VariantProps = new Array();

export const PlasmicProjectCard__ArgProps = new Array(
  "link",
  "image",
  "title",
  "description"
);

const $$ = {};

function PlasmicProjectCard__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          link: `/`,
          image: {
            src: wallpaperjpg7PDc5Y3QE8R,
            fullWidth: 1921,
            fullHeight: 1081,
            aspectRatio: undefined
          }
        },
        props.args
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsoYDgg1BYrMw()
  });
  return (
    <Stack__
      as={PlasmicLink__}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      href={args.link}
      platform={"react"}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? "250px"
              : "400px"
          }
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly") ? "100%" : "auto"
          }
          loading={"lazy"}
          src={args.image}
        />
      </div>
      <h3
        data-plasmic-name={"h3"}
        data-plasmic-override={overrides.h3}
        className={classNames(projectcss.all, projectcss.h3, sty.h3)}
      >
        {renderPlasmicSlot({
          defaultContents: "Project Relaunch",
          value: args.title,
          className: classNames(sty.slotTargetTitle)
        })}
      </h3>
      {renderPlasmicSlot({
        defaultContents:
          "Aut cupiditate expedita dolor eveniet a autem rerum ut dicta. Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe.",
        value: args.description,
        className: classNames(sty.slotTargetDescription)
      })}
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "img", "h3"],
  freeBox: ["freeBox", "img"],
  img: ["img"],
  h3: ["h3"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProjectCard__ArgProps,
          internalVariantPropNames: PlasmicProjectCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProjectCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjectCard";
  } else {
    func.displayName = `PlasmicProjectCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProjectCard = Object.assign(
  // Top-level PlasmicProjectCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    h3: makeNodeComponent("h3"),
    // Metadata about props expected for PlasmicProjectCard
    internalVariantProps: PlasmicProjectCard__VariantProps,
    internalArgProps: PlasmicProjectCard__ArgProps
  }
);

export default PlasmicProjectCard;
/* prettier-ignore-end */
