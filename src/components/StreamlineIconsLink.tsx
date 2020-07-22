// This is a skeleton starter React component generated by Plasmic.
// Feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicStreamlineIconsLink__VariantsArgs,
  PlasmicStreamlineIconsLink
} from "./plasmic/copy_of_cloudflare_ip_checker/PlasmicStreamlineIconsLink"; // plasmic-import: OyXAn4ZHyP8/render

interface StreamlineIconsLinkProps {
  // className prop is required for positioning instances of
  // this Component
  className?: string;
  children?: never;
}

function StreamlineIconsLink(props: StreamlineIconsLinkProps) {
  return (
    <PlasmicStreamlineIconsLink
      root={
        // className prop needs to be piped to the root element of this component
        { className: props.className }
      }
    />
  );
}

export default StreamlineIconsLink as React.FunctionComponent<
  React.ComponentProps<typeof StreamlineIconsLink>
>;