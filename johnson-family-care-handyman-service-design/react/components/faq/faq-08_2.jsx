"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Faq8_2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Details on our Home Care & Repairs services for the smaller jobs
            around your place.
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
              Can you mount my TV?
            </p>
            <p>
              Yes. We mount TVs, soundbars, mirrors, and shelving. We make sure
              it is level, secure, and the cables are tidy.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do you assemble flat-pack furniture?
            </p>
            <p>
              We do. We have put together more flat-packs than we care to count.
              We follow the instructions and it gets done right.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Can you fix a sticky door?
            </p>
            <p>
              Yes. Sticky doors, loose hinges, and broken handles are common
              jobs for us. We will have it opening smooth again.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do you do painting and patching?
            </p>
            <p>
              We patch holes, sand, and touch up paint. We also do accent walls,
              exterior trims, and silicone replacement.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              What outdoor work do you do?
            </p>
            <p>
              Gutter clearing, pressure washing, fence repairs, and deck
              re-staining. We can also trim hedges and remove the green waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
