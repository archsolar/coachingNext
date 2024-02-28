import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init("0a00c8af036c46499968fc1e6c9c5d38");

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
  }
);
