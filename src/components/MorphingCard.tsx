"use client"
import { ProductMorphingCard } from "./product-morphing-card"

// This component provides default data to the ProductMorphingCard logic
export function MorphingCard() {
  const defaultProduct = {
    image: "/luxury-resort-swimming-pool.jpg",
    title: "Luxury Ocean Resort",
    description:
      "Experience the ultimate getaway in our overwater villas with private infinity pools and 24/7 butler service.",
    uses: ["Private Beach Access", "Gourmet Dining", "Wellness Spa", "Island Excursions"],
    alt: "Luxury resort swimming pool with ocean view",
  }

  return (
    <ProductMorphingCard
      {...defaultProduct}
      onRequestQuote={() => console.log("[v0] Quote requested for luxury resort")}
    />
  )
}
