// This is a skeleton starter React component generated by Plasmic.
// Feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicValidationResultIcon__VariantsArgs,
  PlasmicValidationResultIcon
} from "./plasmic/copy_of_cloudflare_ip_checker/PlasmicValidationResultIcon"; // plasmic-import: IB70_6M4C4N/render

interface ValidationResultIconProps {
  status?: PlasmicValidationResultIcon__VariantsArgs["status"];
  // className prop is required for positioning instances of
  // this Component
  className?: string;
  children?: never;
}

function ValidationResultIcon(props: ValidationResultIconProps) {
  return (
    <PlasmicValidationResultIcon
      variants={{
        status: props.status
      }}
      root={
        // className prop needs to be piped to the root element of this component
        { className: props.className }
      }
    />
  );
}

export default ValidationResultIcon as React.FunctionComponent<
  React.ComponentProps<typeof ValidationResultIcon>
>;