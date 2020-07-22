// This is a skeleton starter React component generated by Plasmic.
// Feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicLink__VariantsArgs,
  PlasmicLink
} from "./plasmic/copy_of_cloudflare_ip_checker/PlasmicLink"; // plasmic-import: MOaq4ic9l39/render

interface LinkProps {
  // className prop is required for positioning instances of
  // this Component
  className?: string;
  children?: never;
}

function Link(props: LinkProps) {
  return (
    <PlasmicLink
      root={
        // className prop needs to be piped to the root element of this component
        { className: props.className }
      }
    />
  );
}

export default Link as React.FunctionComponent<
  React.ComponentProps<typeof Link>
>;
