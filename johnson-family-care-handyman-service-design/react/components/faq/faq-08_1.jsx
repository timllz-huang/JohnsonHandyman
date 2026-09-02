"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Faq8_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Answers about our major works including carpentry, decks, room
            additions, bathrooms, and minor plumbing.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Can you build a deck?
            </p>
            <p>
              Yes. We build timber decks and pergolas from the ground up. We
              handle the framing, the boards, and the finish.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do you manage bathroom renovations end to end?
            </p>
            <p>
              We do. We coordinate the waterproofing, tiling, fixtures, and
              plumbing. You deal with one team, not five different contractors.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              What is a room addition?
            </p>
            <p>
              It is adding or converting a space in your home. This could be a
              new bedroom, a garage conversion, or a granny flat fit-out.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do you do structural repairs?
            </p>
            <p>
              We repair timber framing and structural elements. If an engineer
              is needed, we will tell you straight away and work with their
              plans.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              What minor plumbing do you handle?
            </p>
            <p>
              Leaking taps, mixer replacements, toilet repairs, and small
              drainage issues. For major pipework, we will recommend a licensed
              plumber we trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
