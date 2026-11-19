import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShareLinks from "./ShareLinks";

test("provides share links to the item details page", () => {
  render(<ShareLinks />);
  const itemUrl = `${window.location.origin}/item-details`;
  expect(new URL(screen.getByRole("link", { name: "Share on Facebook" }).href).searchParams.get("u")).toBe(itemUrl);
  expect(new URL(screen.getByRole("link", { name: "Share on Twitter" }).href).searchParams.get("url")).toBe(itemUrl);
  expect(screen.getByRole("link", { name: "Share by email" })).toHaveAttribute("href", `mailto:?body=${encodeURIComponent(itemUrl)}`);
});
