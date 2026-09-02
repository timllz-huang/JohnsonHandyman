"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout192() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 font-semibold md:mb-4">Taps</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              New taps and mixers fitted properly
            </h2>
            <p className="text-medium">
              Old taps get stiff, ugly, and wasteful. We remove the old fixtures
              and install new ones that work smoothly and look right in your
              kitchen or bathroom.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Quote" variant="secondary">
                Quote
              </Button>
              <Button
                title="Call"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
