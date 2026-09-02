"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Call, ChevronRight, LocationOn, Mail } from "relume-icons";

export function Contact13() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Contact</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Reach us</h2>
          <p className="text-medium">
            Call or write. We answer fast and talk straight.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 md:gap-x-20 md:gap-y-16 lg:grid-cols-[0.5fr_1fr]">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <Mail className="size-8 text-scheme-text" />
              </div>
              <h3 className="mb-2 text-h6 font-bold">Email</h3>
              <p className="mb-2">Send us the details anytime</p>
              <a className="underline" href="#">
                info@johnsonpropertysolutions.com.au
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <Call className="size-8 text-scheme-text" />
              </div>
              <h3 className="mb-2 text-h6 font-bold">Phone</h3>
              <p className="mb-2">Call during business hours</p>
              <a className="underline" href="#">
                0400 123 456
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <LocationOn className="size-8 text-scheme-text" />
              </div>
              <h3 className="mb-2 text-h6 font-bold">Office</h3>
              <p className="mb-2">Western Sydney NSW Australia</p>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Get directions"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Get directions
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              alt="Relume placeholder image"
              className="size-full rounded-image object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
