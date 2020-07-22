// This is a skeleton starter React component generated by Plasmic.
// Feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicInput__VariantsArgs,
  PlasmicInput
} from "./plasmic/copy_of_cloudflare_ip_checker/PlasmicInput"; // plasmic-import: RGeap8xl0N4/render

interface InputProps {
  placeholder?: string;
  focusWithin?: PlasmicInput__VariantsArgs["focusWithin"];
  // className prop is required for positioning instances of
  // this Component
  className?: string;
  children?: never;
}

function Input(props: InputProps) {
  return (
    <PlasmicInput
      variants={{
        focusWithin: props.focusWithin
      }}
      args={{
        placeholder: props.placeholder
      }}
      root={
        // className prop needs to be piped to the root element of this component
        { className: props.className }
      }
    />
  );
}

export default Input as React.FunctionComponent<
  React.ComponentProps<typeof Input>
>;
